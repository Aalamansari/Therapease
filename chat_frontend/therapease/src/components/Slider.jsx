
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import { backgroundslider, quotebackground, quoteleft, quoteright, quotes } from "../assets"; // Import your images

const Slider = () => {
  return (
    <section className="md:mt-0 mt-10">
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      className="w-full "
    >
    <div  style={{ position: "relative" }}>
      <img src={quotebackground} alt="Slide 1" className="h-70% " />
     <div className="absolute inset-0">
       <div className="items-center justify-center xl:mt-[290px] lg:mt-[180px] md:mt-[100px] mt-[40px] md:px-[150px] px-4">
         <h3 className="xl:text-[50px] lg:text-[42px] md:text-[25px] text-[17px] items-center">
      "What mental health needs is more sunlight, more candor, more unashamed conversation."
         </h3>
       </div>
  
       <div style={{ position: "absolute", left: "0" }}>
        <img src={quoteleft} className="xl:w-[500px] xl:h-[500px] lg:w-[480px] lg:h-[480px] md:w-[300px] md:h-[300px] w-[180px] h-[180px] xl:mt-[120px] lg:mt-[90px] mt-1" />
       </div>
      <div style={{ position: "absolute", right: "0" }}>
      <img src={quoteright} className="lg:w-[300px] lg:h-[300px] md:w-[260px] md:h-[260px] w-[150px] h-[150px] lg:mt-[200px] xl:mt-[250px]  mt-5" />
      </div>
      </div>
    </div>
    <div  style={{ position: "relative" }}>
      <img src={quotebackground} alt="Slide 2" className="h-70%" />
     <div className="absolute inset-0">
       <div className="items-center justify-center xl:mt-[290px] lg:mt-[180px] md:mt-[100px] mt-[40px] md:px-[150px] px-4">
         <h3 className="xl:text-[50px] lg:text-[42px] md:text-[25px] text-[18px] items-center">
         "Mental health thrives in the light of understanding and support."
         </h3>
       </div>
  
       <div style={{ position: "absolute", left: "0" }}>
        <img src={quoteleft} className="xl:w-[500px] xl:h-[500px] lg:w-[480px] lg:h-[480px] md:w-[300px] md:h-[300px] w-[180px] h-[180px] xl:mt-[120px] lg:mt-[90px] md:mt-9 mt-1" />
       </div>
      <div style={{ position: "absolute", right: "0" }}>
      <img src={quoteright} className="lg:w-[300px] lg:h-[300px] md:w-[260px] md:h-[260px] w-[150px] h-[150px] lg:mt-[200px] xl:mt-[250px] md:mt-[60px] mt-5" />
      </div>
      </div>
    </div>
    <div  style={{ position: "relative" }}>
      <img src={quotebackground} alt="Slide 3" className="h-70%" />
     <div className="absolute inset-0">
       <div className="items-center justify-center xl:mt-[290px] lg:mt-[180px] md:mt-[100px] mt-[40px] md:px-[150px] px-4">
         <h3 className="xl:text-[50px] lg:text-[42px] md:text-[25px] text-[18px] items-center">
         "A conversation can be the turning point for someone's mental health."
         </h3>
       </div>
  
       <div style={{ position: "absolute", left: "0" }}>
        <img src={quoteleft} className="xl:w-[500px] xl:h-[500px] lg:w-[480px] lg:h-[480px] md:w-[300px] md:h-[300px] w-[180px] h-[180px] xl:mt-[120px] lg:mt-[90px] md:mt-9 mt-1" />
       </div>
      <div style={{ position: "absolute", right: "0" }}>
      <img src={quoteright} className="lg:w-[300px] lg:h-[300px] md:w-[260px] md:h-[260px] w-[150px] h-[150px] lg:mt-[200px] xl:mt-[250px] md:mt-[60px] mt-5" />
      </div>
      </div>
    </div>

      
    </Carousel>
    </section>
  );
};

export default Slider;