from django.shortcuts import render
from rest_framework.decorators import api_view  #check if the api request is POST or GET
from rest_framework.response import Response
import random
import json
import torch
from .model import NeuralNet
from .nltk_utils import bag_of_words, tokenize
import os
from .serializers import chatSerializer
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Create your views here.
model_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..','Model','data.pth')

model1 = torch.load(model_path)

@api_view(['POST'])
def predict(request):
    if request.method == 'POST':
        # serializer = chatSerializer(data={'userInput':request.POST['user']})
        serializer = chatSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            #convert input data to input format for model
            with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..','api','intents.json'), 'r') as json_data:
                intents = json.load(json_data)  
            input_size = model1["input_size"]
            hidden_size = model1["hidden_size"]
            output_size = model1["output_size"]
            all_words = model1['all_words']
            tags = model1['tags']
            model_state = model1["model_state"]
            model2 = NeuralNet(input_size, hidden_size, output_size).to(device)
            model2.load_state_dict(model_state)
            model2.eval()
            
            input_data = serializer.validated_data.values()
            input_data = str(next(iter(input_data)))
            sentence = tokenize(input_data)
     
            X = bag_of_words(sentence, all_words)
  
            X = X.reshape(1, X.shape[0])
      
            X = torch.from_numpy(X).to(device)
         
            
        output = model2(X)
        _, predicted = torch.max(output, dim=1)
        tag = tags[predicted.item()]
        probs = torch.softmax(output, dim=1)
        prob = probs[0][predicted.item()]
        
        
        if prob.item() > 0.75:
            for intent in intents['intents']:
                if tag == intent['tag']:
                    return Response(random.choice(intent['responses']))
                    # output = random.choice(intent['responses'])
                    # return render(request, 'main.html', {'result': output})
        else:
            return Response("I do not understand...")
            # output = "I do not understand"
            # return render(request, 'main.html', {'result': output})
    # return render(request, 'main.html')