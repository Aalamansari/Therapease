import React from 'react'
import { navbar } from '../assets'
import Navbartest from './Navbartest'
import Testsection from './Testsection'
import Assesment from './Assesment'
import Footer from './Footer'



const Test = () => {
  return (
    <section>
        
        <Navbartest/>
       
        <img src={navbar} className='' />
        <Testsection/>
        <Assesment/>
        <Footer/> 
       
        
    </section>
  )
}

export default Test