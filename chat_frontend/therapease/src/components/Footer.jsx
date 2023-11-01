import styles from "../style";
import React, { useState } from 'react';
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import backgroundImage from "../assets/footer.png"
const Footer = () =>{
  const [email, setEmail] = useState('');
  
  return (
  <section className={`${styles.paddingY}  flex  flex-col  xl:mt-[-37px] lg:mt-[-31px] md:mt-[-19px] mt-[-10px] bg-cover `}style={{ backgroundImage: `url(${backgroundImage})`}}>
    <div className={`${styles.flexStart}  md:flex-row flex-col mb-8  `}>
      <div className=" flex flex-col justify-start mr-10">
       
       <img src={logo} alt="hoobank" className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]  ml-8 mr-8 object-contain"  />
      </div>
      <div className="flex-1  flex flex-row flex-wrap justify-between  md:mt-0 mt-10" style={{ overflowX: 'hidden' }}>
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ml-4  ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-montserrat font-semibold md:text-[24px] text-[20px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-montserrat font-normal md:text-[20px] text-[17px] leading-[24px] text-black hover:text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col mr-[40px] ">
          <h1 className="mr-[-170px] text-[24px] font-semibold font-montserrat md:ml-0 ml-4">Let’s Stay Connected</h1>
          <p className="mt-[10px] max-w-[235px] mb-3 md:ml-0 ml-4 ">To stay connected with us, please enter your email.</p>
          <form  className="flex md:ml-0 ml-4 ">
          <input type="email" placeholder="Your Email" className="bg-relative w-[190px] h-[36px] rounded-lg px-4 max-h-63 relative bg-white border-white" value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <button className="inline-block bg-white rounded-lg py-2 px-2 w-[90px] h-[36px] ml-3">Submit</button> </form>
        <h1 className="mr-[-170px] text-[24px] font-semibold font-montserrat md:ml-0 ml-4 mt-4 ">Connect With us</h1>
        <div className="flex flex-row md:mt-4 md:ml-0 ml-4">

        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[25px] h-[25px] object-contain cursor-pointer mr-9  mt-2  ${
              index !== socialMedia.length - 1 ? "mr-8" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>

      </div>
      
    </div>
    <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-medium text-center text-[20px] leading-[27px] text-black">
        Copyright Ⓒ 2023 Therapease. All Rights Reserved.
      </p>

      {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer bg-black  ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </div>
  </section>
)}

export default Footer