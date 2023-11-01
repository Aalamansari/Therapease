import React, { useState } from 'react';
import { logo } from "../assets";
import backgroundImage from '../assets/forgot-password.png';
import { Link } from 'react-router-dom';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsSubmitted(true);
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-cover relative bg-center md:bg-none" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <Link to="/">
         <img src={logo} alt="Logo" className="absolute md:left-0 left-4 md:ml-[51px]  top-4 md:mt-[28px] md:h-[60px] md:w-[60px] w-[51px] h-[51px] " /></Link>
      <div className="md:w-[400px] md:h-[344px] w-[350px] h-[344px] p-6 bg-white rounded-lg shadow-md">
        
        <h2 className="text-[26px] font-montserrat mb-4 font-medium md:pl-[50px] pl-[10px]">Forgot Password</h2>
        {isSubmitted ? (
          <p className="text-green-500 mb-4">Password reset instructions sent to your email.</p>
        ) : (
          <>
            
            <form onSubmit={handleSubmit} className='w-[300px] h-[44] space-y-2 justify-center md:pl-[50px] pl-[10px] items-center'>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-3 mt-10 font-normal">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-faintgray text-white py-2 mt-4 rounded-md hover:bg-faintgray focus:outline-none focus:ring focus:ring-blue-200"
              >
                Send Reset Link
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;