import React from 'react';
import backgroundImage from '../assets/hero-background.png'; // Replace with the actual path to your background image
import styles from '../style';
import { Bot } from '../assets';
import Navbar from './Navbar';
const Home = () => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   
  };

 
  return (
    
    <section >
      <Navbar/>
    <div className={`flex md:flex-row flex-col items-center w-[100%] justify-center h-[90%] bg-cover bg-center  md:bg-none" ${styles.paddingY} `} style={heroStyle}>
   
    
      
      
      <div className={`flex ${styles.flexStart} flex-col xl:px-0 pl-4 lg:mx-16 `}>
        
       
        <div className="flex flex-left justify-between md:items-center md:mt-0 mt-20">
          <h1 className="  font-bold lg:text-[52px] text-[42px] text-white  lg:leading-[75px]">
            Talk. <br className="block " />{" "}
            <span>Resolve.</span>{" "} <br className="sm:block " />{" "}
            <span>Heal.</span>
          </h1>
        </div>

        <p className={`lg:text-[20px] text-[18px] md:max-w-[360px] max-w-[360px] mt-5  line-[45px] text-white font-normal`}>
        Your mental wellness matters to us, and we are here to listen and support every step of the way.
        </p>
        <a href="/Chatbot" className=" font-normal cursor-pointer  text-[17px] text-white"> 
        <button  className="lg:w-[156px] w-[130px] lg:h-[47px] h-[40px] mt-5 bg-red text-white font-monsteraat  rounded-2xl">Chatbot</button></a>
      </div>

      <div className={` flex flex-right lg:mr-6 lg:mt-0 mt-9 lg:pt-0 md:mt-6 relative`}>
        <img src={Bot} alt="billing" className="w-[100%] h-[100%] relative z-[5] " />
      </div>

     
      </div>
      
    </section>
  );
};

export default Home;



