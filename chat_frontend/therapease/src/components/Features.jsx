// import React from 'react';
// import { featurebgcircle, feature1, feature2, feature3 } from '../assets';
// import styles from '../style';

// const Card = ({ title, img, bgColor, }) => {
//   return (
//     <section >
//       <div className={`flex flex-row lg:mx-5 mx-3 my-4 relative hover:shadow-xl `}>
        
//         <div className={`relative  xl:w-[320px] xl:h-[330px] lg:w-[310px] lg:h-[320px] ${bgColor} md:w-[210px] md:h-[190px] w-[250px] h-[250px]  rounded-lg shadow-lg z-10`}>
//           <div className="">
            
//             <img src={img}  className={`xl:w-[240px] xl:h-[240px] mt-4 lg:w-[230px] lg:h-[230px] md:w-[120px] md:h-[120px] relative hover: ${styles.flexCenter}  w-[160px] h-[160px]  ml-12 object-cover`} />
//             <div className="text-center mt-4">
//             <h3 className="text-xl font-semibold">{title}</h3>
//            </div>
//          </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Features = () => {
//   const cardData = [
//     {
//       title: "Go Paperless",
//       img: feature1,
//       bgColor: 'bg-olive',
//     },
//     {
//       title: "Save Time",
//       img: feature2,
//       bgColor: "bg-lightred",
//     },
//     {
//       title: "Chat with Chatbot",
//       img: feature3,
//       bgColor: "bg-yellowlight",
//     },
//   ];

//   return (
//     <section className="pt-[100px] w-[100%] h-[100%] ">
//       <h1 className={`${styles.flexCenter} font-semibold md:text-[38px] mt-15 mb-[-70px] text-[30px]`}>Our Features</h1>
//       <div className='relative'>
//       <img
//             src={featurebgcircle}
//             alt="Background Circle"
//             className=" xl:ml-[90px] ml-3 relative lg:w-[280px] xl:h-[210px]   lg:h-[210px] md:w-[190px] md:h-[145px] w-[210px] h-[157px] object-cover top-[100px] "
//           />

//       <div className={`flex flex-wrap justify-center  `}>
//         {cardData.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             img={card.img}
//             bgColor={card.bgColor}
            
//           />
//         ))}
//         </div>
//         <img
//             src={featurebgcircle}
//             alt="Background Circle"
//             className="z-0 absolute mr-3 bottom-[-80px] right-0 lg:w-[280px] xl:h-[210px] lg:h-[210px]  md:w-[190px] md:h-[145px] w-[210px] h-[157px] mb-3 xl:mr-20 object-cover"
//           />
//       </div>
//     </section>
//   );
// };

// export default Features;


import React, { useState } from 'react';
import { featurebgcircle, feature1, feature2, feature3 } from '../assets';
import styles from '../style';

const Card = ({ title, img, bgColor }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <section>
      <div
        className={`flex flex-row lg:mx-5 mx-3 my-4 relative ${
          isImageHovered ? 'hover:shadow-xl' : ''
        }`}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <div
          className={`relative xl:w-[320px] xl:h-[330px] lg:w-[310px] lg:h-[320px] ${bgColor} md:w-[210px] md:h-[190px] w-[250px] h-[250px]  rounded-lg z-10`}
        >
          <div className="">
            <img
              src={img}
              className={`xl:w-[240px] xl:h-[240px] mt-4 lg:w-[230px] lg:h-[230px] md:w-[120px] md:h-[120px] relative ${styles.flexCenter}  w-[160px] h-[160px]  ml-12 object-cover ${
                isImageHovered ? 'hover:scale-110 transition-transform duration-300' : ''
              }`}
              alt={title}
            />
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const cardData = [
    {
      title: "Go Paperless",
      img: feature1,
      bgColor: 'bg-olive',
    },
    {
      title: "Save Time",
      img: feature2,
      bgColor: "bg-lightred",
    },
    {
      title: "Chat with Chatbot",
      img: feature3,
      bgColor: "bg-yellowlight",
    },
  ];

  return (
    <section className="pt-[100px] w-[100%] h-[100%] ">
      <h1 className={`${styles.flexCenter} font-semibold md:text-[38px] mt-15 mb-[-70px] text-[30px]`}>Our Features</h1>
      <div className='relative'>
        <img
          src={featurebgcircle}
          alt="Background Circle"
          className="xl:ml-[90px] ml-3 relative lg:w-[280px] xl:h-[210px]   lg:h-[210px] md:w-[190px] md:h-[145px] w-[210px] h-[157px] object-cover top-[100px] "
        />

        <div className={`flex flex-wrap justify-center  `}>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              img={card.img}
              bgColor={card.bgColor}
            />
          ))}
        </div>
        <img
          src={featurebgcircle}
          alt="Background Circle"
          className="z-0 absolute mr-3 bottom-[-80px] right-0 lg:w-[280px] xl:h-[210px] lg:h-[210px]  md:w-[190px] md:h-[145px] w-[210px] h-[157px] mb-3 xl:mr-20 object-cover"
        />
      </div>
    </section>
  );
};

export default Features;