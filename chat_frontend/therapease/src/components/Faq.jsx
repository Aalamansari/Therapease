import React, { useState } from "react";
import Accordionitem from "./Accordionitem";
import styles from "../style";
import { accordionData } from "../constants";

const Faq = () => {

  const [open, setOpen] = useState(null);

  

  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }
    setOpen(index)
  }
 
 

  return (
    <div className="items-center justify-center">
      <h1 className={`${styles.flexCenter}  md:text-[38px] mt-15 font-semibold mb-[-70px] mt-[100px] text-[28px]`}>Frequently asked Questions</h1>
      <section className="bg-white h-screen grid place-items-center ">
        <div className="px-[40px]  max-w-[700] md:mt-0 mt-[-200px] ">
          {accordionData.map((data, index) => {
            return <Accordionitem key={index} open={index === open} title={data.title} 
            desc={data.desc} color={data.color} toggle={() => toggle(index)} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Faq;