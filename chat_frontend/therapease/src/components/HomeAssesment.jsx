import React from 'react';
import { Link } from 'react-router-dom';
import { containerbg, containerbot, containerbottom, containerleft, containerright, containertop } from '../assets';

const HomeAssessment = () => {
  return (
    <div className="App min-h-screen flex items-center justify-center lg:mb-[-100px] md:mb-[-200px]  lg:mt-0 md:mt-[-100px] mt-[-180px] ">
      <section>
      <div className="container lg:w-[1100px] lg:h-[335px] md:w-[680px] md:h-[250px] w-[400px] h-[250px] md:rounded-[25px] rounded-[15px]  lg:flex-row shadow-xl lg:mx-0 md:mx-12 mx-8 relative overflow-hidden md:flex hidden">
        <img src={containerleft} alt=""  className=' xl:w-[140px] lg:w-[120px] h-full md:w-[80px] md:h-full'/>
        <div className="flex flex-col lg:mt-[60px] md:mt-[30px] mt-0 relative lg:mr-[-55px] lg:ml-[53px] md:ml-6    ">
          <h1 className="text-black font-semibold lg:text-[32px] md:text-[23px] text-[25px] lg:mt-[-20px] xl:mr-[-100px] lg:mr-[-100px] md:mr-[-450px] relative">
            Assessment Time. Test Your Mind!
          </h1>
          <p className="xl:max-w-[500px] lg:max-w-[485px] lg:mt-6 md:mt-3 font-normal lg:text-[24px] md:text-[18px] text-[16px] lg:leading-normal lg:mr-0 md:mr-[-450px] text-black">
            Take the assessment and <br></br>find out how much you scored.
          </p>
          <button className="bg-lightred py-2 text-black rounded-xl mt-6 px-3 md:w-[150px] md:h-[43px]">
            <Link to="/quizpage">Take Assessment</Link>
          </button>
        </div>
        <img src={containerbot} alt="" className={`lg:w-[350px] lg:h-[350px] lg:mr-[-180px] lg:ml-[100px] ml-[120px] lg:mt-5 md:mt-3 relative`} />
        <img src={containerright} alt="" className={`right-0 lg:w-[250px] h-[335px] w-[140px] lg:ml-[50px] md:ml-[-70px]`} />
      </div>
      </section>
      <section className='md:hidden'>
     <div className='container w-[350px] rounded-[25px] shadow-xl t-[00px] mb-[-200px] flex flex-col items-center justify-center '>
    <img src={containertop} alt="" className=' w-full h-[80px]'/>
    <img src={containerbot} alt="" className='items-center justify-center w-[250px] h-[250px] mt-[-100px] mb-[-50px]' />
    <h1 className='text-[20px] font-semibold text-center'>Assessment Time. Test Your Mind!</h1> 
    <p className='text-[18px] px-[50px] mt-4'>Take the assessment and find out how  much you scored.</p>
    <button className="bg-lightred py-2 text-black rounded-xl mt-6 px-3 md:w-[150px] md:h-[43px] mb-4">
            <Link to="/quizpage">Take Assessment</Link>
          </button>

    <img src={containerbottom} alt="" className='w-full h-[120px]' />
     </div>
     </section>
    </div>
  );
};

export default HomeAssessment;