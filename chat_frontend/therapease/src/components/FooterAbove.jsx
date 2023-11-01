import React from 'react';
import { footerabove } from '../assets';

const FooterAbove = () => {
  return (
    <div className="relative md:mt-0 mt-[-200px]">
      <img src={footerabove} alt="Footer Above" className="w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-center text-black  lg:text-[36px] md:text-[24px] text-[16px] xl:p-4 md:pb-0 pb-[80px] lg:w-1/2 md:w-3/4 w-3/4 ">
          TherapEase is a chatbot offering personalized counseling and emotional support 24/7 for individuals struggling with stress, anxiety, or daily challenges.
        </p>
      </div>
    </div>
  );
};

export default FooterAbove;