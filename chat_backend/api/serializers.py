from rest_framework import serializers
from .models import chatField

class chatSerializer(serializers.ModelSerializer):
    class Meta:
        model = chatField
        fields = '__all__'

        