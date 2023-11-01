import React, { useState } from 'react';
import { logo } from '../assets';
import { questions } from "../constants";
const Result = () => {
    const [formData, setFormData] = useState({});
    const [showResult, setShowResult] = useState(false);
    const handleFinish = () => {
        // Calculate and display the score based on formData
        const score = calculateScore(formData);
        console.log('Quiz completed with formData:', formData);
        console.log('Score:', score);
        setShowResult(true);
      };
  return (
    <div className=''>
        <img src={logo} className='ml-[51px] top-2 mt-[8px] h-[60px] w-[60px]'/>
       <div className="w-[350px] h-[300px] mx-auto items-center  justify-center flex flex-col md:mt-[8%] mt-[20%] p-4 rounded shadow-lg">
       <h2 className="text-[40px] font-bold text-faintgray mb-4">Thank You!</h2>
       <p className='text-[28px] text-faintgray'>For giving the test</p>
       <p >Your score: {calculateScore(formData)}</p>
       </div>
    </div>   
  )
}
// Implement your score calculation function here
const calculateScore = (formData) => {
  
    let score = 0;
    for (const questionId in formData) {
      if (formData[questionId] === 'More than half a day') {
        score++;
      }
    }
    return score;
  };

export default Result