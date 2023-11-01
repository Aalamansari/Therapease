import React from 'react';
import { line, pinkbg } from '../assets';
import styles, { layout } from '../style';
import { Link } from 'react-router-dom';

const Assesment = () => {
    
  return (
    
    
      <section className={`${layout.section} md:mt-[50px] bg-no-repeat w-[100%] lg:h-[100%] h-[70%] mb-[200px]  `} >
        <img src={pinkbg}  className='absolute  w-full lg:h-[400px] md:h-[300px] h-[250px]'/>
     
    <div className={`flex flex-col   lg:mt-[100px] md:mt-[50px] mt-0 relative ]`}>
      
      <h1 className={`text-white font-semibold lg:text-[40px] md:text-[35px] text-[25px]  l  md:mt-0 mt-8 lg:ml-[150px] md:ml-[60px] ml-4`}>We are here to help you!</h1>
      
      <p className={` lg:max-w-[470px] md:max-w-[410px] max-w-[330px] mt-5 font-normal lg:text-[24px] md:text-[20px] text-[16px] leading-normal  lg:ml-[150px] md:ml-[60px] ml-4  text-white`}>
      After taking a free mental health test, TherapEase connects users to a chatbot.
      </p>
      <div className='lg:ml-[150px] md:ml-[60px] ml-4'>
        <button className='bg-faintgray py-2 text-white rounded-xl px-4 mt-5  md:w-[156px]  md:h-[47px] '><Link to='/quizpage'>Take Assesment</Link> </button>
      </div>
      
    </div>
    {/* <div className=''>
      <img src={line} alt="billing" className="w-full lg:h-full md:h-[400px] relative  hidden md:flex " />
    </div> */}
    </section>
    
  )
}

export default Assesment