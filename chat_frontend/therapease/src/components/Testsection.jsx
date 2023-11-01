import React from 'react'
import { testsection } from '../assets'
import styles, { layout } from '../style';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Testsection = () => {
  return (
    <div>
        <section className={`${layout.section} lg:mt-[-100px] `}>
      <div className={layout.sectionImgReverse}>
      <img src={testsection} alt="testsection" className="w-[100%] h-[100%] xl:ml-[100px]" />
    </div>
    <div className={`${layout.sectionInfo} `}>
      
      <h1 className={`text-black  font-semibold xl:text-[48px] lg:text-[42px] md:text-[30px] text-[25px] xl:mr-[140px] lg:mr-[70px] md:ml-[-40px] md:mx-0 mx-[50px]  `}>The most comprehensive free <span className='text-red'>Mental Health Tests</span>  Online. </h1>
      
      <p className={`${styles.paragraph} max-w-[566px] mt-5 font-normal lg:text-[20px] text-[14.9px] leading-normal  xl:mr-[200px] lg:mr-[60px] md:ml-[-40px] md:mx-0 mx-[60px] text-black`}>
      Our free mental health test help users understand their symptoms betters so they can get the treatment they need faster than ever before. The best part? It only takes 3-10 minuets.
      </p>
      <button className='bg-lightred rounded-xl lg:text-23 text-[14px] lg:max-w-[400px] lg:h-[50px] max-w-[300px] mt-8 xl:mr-[330px] lg:mr-[200px] py-2 lg:px-8 px-4 md:ml-[-150px] '>Take A Mental Health Test Today <ArrowDownIcon className="inline lg:w-[25px] lg:h-[25px] w-[20px] h-[20px] text-black" /></button>
    </div>
    
    </section>
    <section className={`${layout.section} md:mt-[-50px]  `}>
     
    <div className={`${layout.sectionInfo} `}>
      
      <h1 className={`text-faintgray font-semibold  lg:text-[40px] md:text-[25px] text-[30px] xl:ml-[-140px] lg:ml-[-90px] md:ml-[-140px]`}>You are not alone</h1>
      
      <p className={` lg:max-w-[570px] max-w-[400px] mt-5 font-normal xl:text-[20px] lg:text-[17px] md:text-[14px] text-[14.9px] md:mx-0 mx-[60px] leading-medium lg:ml-[100px] md:ml-[0px]      text-black`}>
      Anxiety affects 38 million people in India, a prevalent mental health condition. Our mental health website provides resources, information, and support to manage and lead a healthier life. Seeking help is a courageous step towards healing, and you don't have to face anxiety alone.

      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:ml-0 ml-0 md:mt-0   relative`}>
    <div className=" lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] w-[250px] h-[250px] mx-auto items-center  justify-center flex flex-col md:mt-[8%] mt-[20%] p-4 xl:mr-[280px] rounded-xl shadow-xl">
       <h2 className="lg:text-[40px] md:text-[30px] text-[35px] font-bold text-red mb-4">38 Million</h2>
       <p className='lg:text-[18px] text-[16px] text-red'>Indians suffer from anxiety</p>
      
       </div>
    </div>
    </section>
    </div>
  )
}

export default Testsection