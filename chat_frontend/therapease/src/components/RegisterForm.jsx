import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { addDetail } from '../features/cred/credSlice';
import { useNavigate } from 'react-router-dom';
import {Snackbar, Alert} from '@mui/material'  ;

const RegisterForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [otpsnack, setOTPsnack] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&])[A-Za-z\d@#$!%^&]{6,}$/;

    return regex.test(value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    let genderValue;

    if (gender === 'male'){
      genderValue = 1;
    } else if(gender === 'female'){
      genderValue = 2;
    } else if(gender === 'other'){
      genderValue = 3;
    }

    const userCred = {
			detail: {
				first_name: firstName,
				last_name: lastName,
				email: email,
			},
		};
		dispatch(addDetail(userCred));


    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      !validatePassword(password)
    ) {
      setError(true);
    } else {
      setError(false);

      const apiUrl = 'http://127.0.0.1:8000/accounts/create-user/'; // Replace with your Django API URL


      try {
        const response = await axios.post(apiUrl, {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          gender: genderValue,
        });
        if(response.status === 201){
          console.log('Registration successful.');
          setOTPsnack(true)
          setTimeout(() => {
            navigate('/otpform');
          }, 5000);
        }      
      } catch (error) {
        if (error.response.data['status']==500){
          console.log("erereerre");
          setEmailExist(true)
        }
      }
    }
  };


  return (
    <form onSubmit={handleSubmit} className={`md:w-[332px] md:h-[520px] ss:w-full  flex flex-col space-y-0.9`}>
      <div>
      <h2 className="text-3xl font-bold mb-2 md:bg-graylight">Register</h2>
      <p className='text-gray leading-20 max-w-[250px]'>Welcome! Please Register to your account.</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="firstName" className="block py-0.2 text-gray">First Name</label>
          <input
            type="text"
            id="firstName"
            className={`w-full px-3  py-2 border rounded-md ${error ? 'border-red' : 'border-gray'}`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {error && firstName.trim() === '' && <p className="text-red text-[12px]">First Name is required</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block py-0.2 text-gray">Last Name</label>
          <input
            type="text"
            id="lastName"
            className={`w-full px-3 py-2 border rounded-md ${error ? 'border-red' : 'border-gray'}`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {error && lastName.trim() === '' && <p className="text-red text-[12px]">Last Name is required</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block py-0.2 text-gray">Email</label>
        <input
          type="email"
          id="email"
          className={`w-full px-3 py-2 border rounded-md ${error ? 'border-red' : 'border-gray'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && email.trim() === '' && <p className="text-red text-[12px]">Email is required</p>}
        {emailExist  && <p className="text-red text-[12px]">Email id already exists!</p>}
      </div>
      <div>
        <label htmlFor="password" className="block mb-0.2 py-0.2 text-gray">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`w-full px-3 py-2 border rounded-md ${
            error ? 'border-red' : 'border-gray'
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && password.trim() === '' && (
          <p className="text-red"></p>
        )}
        {error && !validatePassword(password) && (
          <p className="text-red text-[12px]">
            Password must be at least 6 characters long, include atleast 1 Uppercase letter, 1 lowercase letter, 1 numeric value and 1 special character
          </p>
        )}
      </div>
      <div>
        <label className="block mb-0.2 py-1 text-gray">Gender</label>
        <div className='ml'>
        <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
              className='mr-[10px]' 
            />
          <label>
            Male
          </label>
          <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
              className='ml-[60px]'
            />
          <label style={{ marginLeft: '10px' }}>
            Female
          </label>
          <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={() => setGender("other")}
              className='ml-[60px]'
            />
          <label style={{ marginLeft: '10px'}}>
            Other
          </label>
        </div>
        {error && !gender && <p className="text-red text-[12px]">Please select a gender</p>}
      </div>
      <div className='mt-3'>
        <label></label>
        <button
          type="submit"
          className="w-full bg-red text-white py-2 rounded-md hover:bg-red focus:outline-none focus:ring focus:ring-red focus:ring-opacity-50"
        >
          Register
        </button>
      </div>
      <p className='text-gray md:py-1 py-5'>Already Register? <Link to='/LoginPage' className='text-red'>Login</Link></p>
      <Snackbar open={otpsnack} onClose={() => setOTPsnack(false)} autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
      <Alert onClose={() => setOTPsnack(false)} severity="success" sx={{ width: '100%' }}>
        OTP has been sent to your registered Email Id.
      </Alert>
    </Snackbar>
    </form>
  );
};

export default RegisterForm;