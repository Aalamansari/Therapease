import React from 'react';
import {  XMarkIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import { Bot1 } from '../assets';
import { Link } from 'react-router-dom';

const ChatCard = ({ handleShowChat, children }) => {
  // Add a console.log statement to check if handleShowChat is called
  const handleChevronClick = () => {
    handleShowChat(); // Call the handleShowChat function
  };

  return (
    <div className=" inset-0  min-h-screen w-full bg-gray-300 bg-opacity-75">
      <div className="bg-white h-[100vh] shadow-sm border border-gray overflow-hidden">
        <div className={`bg-primary flex items-center justify-between px-4 py-2 bg-gradient-to-r from-primary via-olive to-yellow`}>
          <div className="flex items-center">
            <div>
            <Link to="/">
              <img src={Bot1} className="w-[60px] h-[60px] bg-white rounded-full " /> </Link>
            </div>
            <div className="ml-8">
              <h4 className="text-white sm:text-[25px] text-[19px]">Chat with EaseBOT</h4>
            </div>
          </div>
          <div>
            {/* Use the new handleChevronClick function */}
            <a href="/">
            <XMarkIcon className="h-8 w-8 text-white cursor-pointer" onClick={handleChevronClick} />
            </a>
          </div>
        </div>
        <div className="myScrollBar overflow-x ">{children}</div>
        <Input />
      </div>
    </div>
  );
};

export default ChatCard;