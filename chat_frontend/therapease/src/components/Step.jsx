import React from 'react';
import styles, { layout } from '../style';
import { mango, pink, step1, step2, step3 } from '../assets';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Step = () => {
  return (
    <div className='pt-[120px]  '>
        <h1 className={`${styles.flexCenter} font-semibold md:text-[38px] mt-15 mb-[-40px] text-[36px]`}>How it works</h1>
    <section className={layout.section}>
      <div className={layout.sectionImgReverse}>
      <img src={step1} alt="billing" className="w-[90%] h-[90%] xl:ml-[100px]" />
    </div>
    <div className={layout.sectionInfo}>
      
      <h1 className={`text-red3  font-semibold lg:text-[30px] text-[25px] lg:mr-[140px] `}>Answer a Few Question</h1>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5 font-normal lg:text-[28px] text-[20px] leading-normal  lg:mr-[100px] text-black`}>
      Our best recommendation <br/> can be provided by answering <br/> a few questions about <br/>   yourself.
      </p>
    </div>
    
    </section>

    <img src={pink} className='lg:mt-[-250px] md:mt-[-180px] xl:w-[108px] xl:h-[357px] lg:w-[90px] lg:h-[320px] md:w-[50px] object-cover hidden md:block'/>
    <div className="flex items-center justify-center lg:mt-[-150px] md:mt-[-100px]">
      
        <ArrowDownIcon className="lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[70px] h-[70px] text-yellow" /> {/* Adjust width and height as needed */}
    </div>

    <section className={`${layout.section} md:mt-[-50px] object-cover hidden md:flex `}>
     
    <div className={`flex-1 ${styles.flexCenter} flex-col  md:mt-0 mt-0 `}>
      
      <h1 className={`text-red font-semibold lg:text-[30px] text-[25px] lg:mr-[140px] md:ml-[-30px]  `}>Interact with a Chatbot</h1>
      
      <p className={` max-w-[470px] mt-5 font-normal lg:text-[28px] text-[20px] leading-normal  lg:ml-[0px]  ml-9  md:ml-[40px]    text-black`}>
      You can communicate with chatbot through messaging.
      </p>
    </div>
    <div className={layout.sectionImg}>
      <img src={step2} alt="billing" className="w-[70%] h-[88%] " />
    </div>
    </section>
    {/* Second section for mobile view */}
    <section className={`md:hidden`}>
        <div className={layout.sectionImg}>
          <img src={step2} alt="billing" className="w-[80%] h-[80%] xl:ml-[100px]" />
        </div>
        <div className={`${layout.sectionInfo} `}>
          <h1 className={`text-red font-semibold lg:text-[30px] text-[25px] lg:mr-[140px] md:mt-0 mt-6`}>
            Interact with a Chatbot
          </h1>
          <p className={` max-w-[470px] mt-5 font-normal lg:text-[28px] text-[20px] leading-normal md:ml-10 lg:ml-0  ml-9 text-black`}>
            You can communicate with chatbot through messaging.
          </p>
        </div>
      </section>
  
    <img src={mango} className='absolute right-0 lg:mt-[-100px] md:mt-[-180px] lg:w-[88px] lg:h-[405px] md:w-[50px] object-cover hidden md:block' />
        <div className="flex items-center justify-center lg:mt-[-150px] md:mt-[-100px] ">
        <ArrowDownIcon className="lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[70px] h-[70px] md:mt-0 mt-6  text-yellow" /> {/* Adjust width and height as needed */}
      </div>

    <section className={`${layout.section} md:mt-[-50px] mt-[-30px]`}>
      <div className={layout.sectionImgReverse}>
      <img src={step3} alt="billing" className="lg:w-[85%] lg:h-[85%] w-[90%] h-[90%] xl:ml-[100px]" />
    </div>
    <div className={layout.sectionInfo}>
      
      <h1 className={`text-faintgray font-semibold lg:text-[30px] text-[25px] md:mt-0 mt-6 lg:mr-[280px] md:mr-[120px] mr-[130px]  `}>Get Suggestions</h1>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-4 font-normal items-center lg:text-[28px] text-[20px] leading-normal lg:mr-5 md:ml-0 ml-9 md:mx-0 mx-4  text-black`}>
      Our goal is to provide you with the best solutions.
      </p>
    </div>
    </section>
  </div>
  )
}

export default Step