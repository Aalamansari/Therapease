import React, { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Snackbar, Alert} from '@mui/material';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function OTPFORM() {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const [snackopen, setSnackopen] = useState(false);
  const [errorSnack, setErrorSnack] = useState(false);
  const details = useSelector((state) => state.cred.details);
  const userEmail = details ? details.email : null;
	console.log(userEmail);

  const handleInputChange = (e, index) => {
    const { value } = e.target;

    
    if (/^\d$/.test(value) || value === "") {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      if (value === "" && index > 0) {
        document.getElementById(`otp${index - 1}`).focus();
      } else if (index < 3 && value !== "") {
        document.getElementById(`otp${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const enteredOTP = otp.join("");
    
    const verifyUrl = 'http://localhost:8000/accounts/verify/';

    if (/^\d{4}$/.test(enteredOTP)) {
      setError("");
      console.log("Valid OTP:", enteredOTP);
    } else {
      setError("Please enter a valid 4-digit OTP.");
    }

    // setSnackopen(true)
    try{
      const response = await axios.post(verifyUrl, {
        email:userEmail,
        otp:enteredOTP,
      });
      if(response.status === 200){
        setSnackopen(true)
        console.log('Verification done successfully');
        setTimeout(() => {
          navigate('/LoginPage');
        }, 2000);
      }
      else{
        console.log("Verification");
      }
    }
    catch(error){
      console.log("Error during the verification: ",error);
      setErrorSnack(true)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-redlight via-olive to-yellowlight ">
      <div className="bg-white p-6 rounded shadow-xl w-[350px] h-[250px]">
      <Link to='/register'>
      <ArrowLongLeftIcon className="w-[50px] h-[40px] mb-[-40px]   text-yellow" /></Link>
        <h2 className="text-2xl font-bold text-center mb-4">Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-red-600 text-center"
            ></label>
            <div className="flex items-center justify-center space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp${index}`}
                  name={`otp${index}`}
                  value={digit}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="0"
                  className="w-12 h-12 text-4xl text-center border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                  maxLength="1"
              
                />
              ))}
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-2 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="bg-red mt-5 text-white rounded-md w-full py-2 hover:bg-red focus:outline-none focus:ring focus:ring-red focus:ring-opacity-50"
          >
            Verify
          </button>
        </form>
      </div>
      {/* <Snackbar
        message='OTP verified successfully'
        autoHideDuration={10000}
        open={snackopen}
        onClose={() => setSnackopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      /> */}
    <Snackbar open={snackopen} onClose={() => setSnackopen(false)} autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
      <Alert onClose={() => setSnackopen(false)} severity="success" sx={{ width: '100%' }}>
        Registration done successfully
      </Alert>
    </Snackbar> 
    <Snackbar open={errorSnack} onClose={() => setErrorSnack(false)} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
      <Alert onClose={() => setErrorSnack(false)} severity="error" sx={{ width: '100%' }}>
        Invalid OTP!
      </Alert>
    </Snackbar>
    </div>
  );
}

export default OTPFORM;