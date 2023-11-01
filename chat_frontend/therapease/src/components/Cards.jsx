import React from 'react';
import { Individual, Teen, bgcircle, couple } from '../assets';
import styles from '../style';

const Card = ({ title, buttonText, img, titleColor, buttonBgColor, isFirstCard }) => {
  return (
    <section>
      <div className="flex flex-row lg:mx-5 mx-3 my-4 relative">
        
        <div className="relative bg-white xl:w-[348px] xl:h-[315px] lg:w-[290px] lg:h-[250px]  md:w-[210px] md:h-[190px] w-[250px] h-[250px]  rounded-lg shadow-lg z-10">
          <div className="">
            <h3 className={`lg:text-xl md:text-md text-xl ml-4 font-semibold ${titleColor}`}>{title}</h3>
            <button className={`mt-2 ${buttonBgColor} text-white font-normal  lg:w-[110px] lg:h-[36px] md:w-[90px] md:h-[32px] w-[110px] h-[36px] py-2 ml-4 rounded-xl`}>
              {buttonText}
            </button>
            <img src={img} alt={title} className="xl:w-[240px] xl:h-[240px] lg:w-[190px] lg:h-[180px] md:w-[120px] md:h-[120px]   w-[160px] h-[160px]   ml-14 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Cards = () => {
  const cardData = [
    {
      title: "Individual",
      buttonText: "For Myself",
      img: Individual,
      titleColor: "text-yellow",
      buttonBgColor: "bg-yellow",
    },
    {
      title: "Couple",
      buttonText: "For Couple",
      img: couple,
      titleColor: "text-red",
      buttonBgColor: "bg-red",
    },
    {
      title: "Teen",
      buttonText: "For Teen",
      img: Teen,
      titleColor: "text-faintgray",
      buttonBgColor: "bg-faintgray",
    },
  ];

  return (
    <section className="pt-[100px] w-[100%] h-[100%] ">
      <h1 className={`${styles.flexCenter} font-semibold md:text-[38px] mt-15 text-[30px]`}>You deserve to be happy.</h1>
      <p className={`${styles.flexCenter} md:text-[20px] text-[15px]   font-normal`}>
        What type of therapy are you looking for?
      </p>
      <div className='relative'>
      <img
            src={bgcircle}
            alt="Background Circle"
            className=" xl:ml-[110px] ml-3 relative xl:w-[280px] xl:h-[210px]  lg:w-[210px] lg:h-[157px] md:w-[190px] md:h-[145px] w-[210px] h-[157px] object-cover top-[100px] "
          />

      <div className="flex flex-wrap justify-center ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            buttonText={card.buttonText}
            img={card.img}
            titleColor={card.titleColor}
            buttonBgColor={card.buttonBgColor}
            
          />
        ))}
        </div>
        <img
            src={bgcircle}
            alt="Background Circle"
            className="z-0 absolute mr-3 bottom-[-80px] right-0 xl:w-[280px] xl:h-[210px] lg:w-[210px] lg:h-[157px] md:w-[190px] md:h-[145px] w-[210px] h-[157px] mb-3 xl:mr-20 object-cover"
          />
      </div>
    </section>
  );
};

export default Cards;