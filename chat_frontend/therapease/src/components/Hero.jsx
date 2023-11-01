import React from 'react'
import Home from './Home';
// import Cards from './Cards';
import Step from './Step';
import Slider from './Slider';
import Faq from './Faq';
import Features from './Features';
import FooterAbove from './FooterAbove';
import Footer from './Footer';
import Graphs from './Graphs';
import HomeAssesment from './HomeAssesment';
const Hero = () => {
  return (
    <div>
        <Home/>
        {/* <Cards/> */}
        <HomeAssesment/>
        <Step/>
        <Slider/>
        <Features/>
        <Graphs/>
        <Faq/>
        <FooterAbove/>
        <Footer/>
    </div>
  )
}

export default Hero