import React, { useState, useEffect } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Chats from './Chats';



const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    console.log('chatHistory:',chatHistory);
  }, [chatHistory]);

  const handleInputChange = (e) => {  
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    const userMessageObj = { user: inputValue, bot: '' ,userBool:true};

    e.preventDefault();
    setIsLoading(true);
    try { 
      const response = await axios.post('http://127.0.0.1:8001/api/predict/', {
        userInput: inputValue, 
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const botMessageObj = { user: '', bot: response.data,userBool:false };
      setChatHistory([...chatHistory, userMessageObj, botMessageObj]);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
    setInputValue('')
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white px-3 p-3 ">
        <Chats chatHistory={chatHistory}/>
      <form method="POST" onSubmit={handleSubmit} className=" flex justify-between items-center w-full">
        <input
          name="user"
          type="text"
          placeholder="Type your message"
          className="text-[18px] focus:outline-none w-full"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">
          <PaperAirplaneIcon className="h-7 w-7 text-primary" />
        </button> 
      </form>
    </div>
  );
};

export default Input;

