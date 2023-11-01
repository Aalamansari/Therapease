import React from 'react'
import { about, logo } from '../assets'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {Snackbar, Alert} from '@mui/material';
import { useState } from 'react';

const Quizpage = () => {

  const details = useSelector((state) => state.cred.details);
  const isAuth = details.isAuth;
  const navigate = useNavigate()
  const [notLogsnack, setNotlogSnack] = useState(false);

  const handleClick = (e) => {
    if (isAuth==true){
          navigate('/quiz')
    }
    else{
      setNotlogSnack(true)
    }
  }


  return (
    <div>
      <div className='inset-0 flex items-center justify-between px-4 pt-[80px] bg-gradient-to-r from-primary via-olive to-yellow'>
      <Link to="/"> <img src={logo} className="absolute left-0 md:ml-[51px] ml-[20px] top-2 mt-[8px] h-[60px] w-[60px]" /> </Link>
      </div>
      <div className='flex items-center justify-center mt-[100px]'>
      <img src={about} className='w-[150px] h-[150px] items-center  ' alt="About" />

      </div>
      <div className='flex justify-center items-center '>
        <div className="text-center">
          {/* <img src={about} className='w-[150px] h-[150px] items-center  ' alt="About" /> */}
          <h1 className='font-semibold text-[40px]'>About the test</h1>
          <p className='md:text-[24px] text-[20px] font-normal max-w-[564px] md:mx-0 mx-12 mt-4'>
            Find symptoms, receive results, sign up for TherapEase, and interact with our chatbot.
          </p>
          <button onClick={handleClick} className='bg-yellow rounded-xl py-2 px-8 md:mt-8 mt-4 lg:w-[156px] w-[130px] lg:h-[47px] h-[40px]'>Continue</button>
        </div>
      </div>
      <Snackbar open={notLogsnack} onClose={() => setNotlogSnack(false)} autoHideDuration={5000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
      <Alert onClose={() => setNotlogSnack(false)} severity="error" sx={{ width: '100%' }}>
        You need to log in first.
      </Alert>
    </Snackbar>
    </div>
  )
}

export default Quizpage;