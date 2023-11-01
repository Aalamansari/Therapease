import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addDetail } from '../features/cred/credSlice';
import {Snackbar, Alert} from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [invalidSnack, setInvalidSnack] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&])[A-Za-z\d@#$!%^&]{6,}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '' || !validatePassword(password)) {
      setError(true);
    } else {
      setError(false);
      console.log("\nEmail: ", email, "\nPassword: ", password);
    }

    const loginURL = 'http://127.0.0.1:8000/accounts/login/';

    if (email.trim() !=''  && password.trim() !=''){
      try{
        const response = await axios.post(loginURL, {
          email:email,
          password:password,
        });
        if(response.status ===200){
          console.log('Logon successful-2');
          console.log((response.data['expiry']));
          console.log((response.data['token']));
          console.log(response.data);
          dispatch(addDetail({ detail: { isAuth: true, token:response.data['token'], expiry:response.data['expiry'], user_id:response.data.user['id']} }));
          navigate("/")
        }
        else{
          console.log('Login failed');
        }
      }
      catch(error){
        console.error('Error during Login:', error);
        setInvalidSnack(true)
        setPassword('')
      }
    }
    if (email.trim()==='' && !validatePassword(password)){
      setPassword('')
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className={`w-[332px] h-[413px] flex  flex-col  `}>
      <div className=''>
        <h2 className="text-3xl font-bold mb-3 md:bg-graylight">Login</h2>
        <p className='text-gray leading-20 py-2 max-w-[255px]'>Welcome back! Please login to your account.</p>
      </div>
      <div className="mb-4 grid ">
        <label htmlFor="email" className="block mb-1 py-2 text-gray">Email</label>
        <input
          type="email"
          id="email"
          className={`w-full px-3 py-1.5 border rounded-md ${error ? 'border-red-500' : 'border-gray'}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
        />
        {error && email.trim() === '' && <p className="text-red">Email is required</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-gray">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`w-full px-3 py-1.5 border rounded-md ${
            error ? 'border-red-500' : 'border-gray'
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && password.trim() === '' && (
          <p className="text-red"></p>
        )}
        {error && !validatePassword(password) && (
          <p className="text-red">
            Password must be at least 6 characters long, include atleast 1 Uppercase letter, 1 lowercase letter, 1 numeric value and 1 special character
          </p>
        )}
      </div>
      <div className="flex items-center justify-between mb-4 py-2">
        <label htmlFor="remember" className="flex items-center   text-gray">
          <input type="checkbox" id="remember" 
          className={`mr-2 mt-1 bg-red ${error ? 'bg-red' : 'bg-white'} checked `}
           />
          Remember me
        </label>
        <Link to='/forgot-password' className='text-gray'>forgot-password?</Link>
      </div>
      <button type="submit" className="w-full bg-red text-white py-2 rounded-md ">Login</button>
      <p className='text-gray py-4'>New user? <Link to='/register' className='text-red'>Register</Link></p>
    <Snackbar open={invalidSnack} onClose={() => setInvalidSnack(false)} autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
      <Alert onClose={() => setInvalidSnack(false)} severity="error" sx={{ width: '100%' }}>
        Invalid Email or Password!
      </Alert>
    </Snackbar>
    </form>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import {useDispatch, useSelector} from 'react-redux';
// import { addDetail } from '../features/cred/credSlice';
// import {Snackbar, Alert} from '@mui/material';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(false);
//   const [invalidSnack, setInvalidSnack] = useState(false);
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const details = useSelector((state) => state.cred.details);
//   const userEmail = details ? details.email : null;

//   const validatePassword = (value) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&])[A-Za-z\d@#$!%^&]{6,}$/;
//     return regex.test(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (email.trim() === '' || password.trim() === '' || !validatePassword(password)) {
//       setError(true);
//     } else {
//       setError(false);
//       console.log("\nEmail: ", email, "\nPassword: ", password);
//     }

//     const loginURL = 'http://127.0.0.1:8000/accounts/login/';

//     if (email.trim() !=''  && password.trim() !=''){
//       try{
//         const response = await axios.post(loginURL, {
//           email:email,
//           password:password,
//         });
//         if(response.status ===200){
//           console.log('Logon successful-2');
//           dispatch(addDetail({ detail: { isAuth: true, token:response.data['token'], expiry:response.data['expiry']} }));
//           if (userEmail==null){
//             dispatch(addDetail({ detail: { email:email} }));
//           }
//           navigate("/")
//         }
//         else{
//           console.log('Login failed');
//         }
//       }
//       catch(error){
//         console.error('Error during Login:', error);
//         setInvalidSnack(true)
//         setPassword('')
//       }
//     }
//     if (email.trim()==='' && !validatePassword(password)){
//       setPassword('')
//     }
//   };

//   return (
    
//     <form onSubmit={handleSubmit} className={`w-[332px] h-[413px] flex  flex-col  `}>
//       <div className=''>
//         <h2 className="text-3xl font-bold mb-3 md:bg-graylight">Login</h2>
//         <p className='text-gray leading-20 py-2 max-w-[255px]'>Welcome back! Please login to your account.</p>
//       </div>
//       <div className="mb-4 grid ">
//         <label htmlFor="email" className="block mb-1 py-2 text-gray">Email</label>
//         <input
//           type="email"
//           id="email"
//           className={`w-full px-3 py-1.5 border rounded-md ${error ? 'border-red-500' : 'border-gray'}`}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}  
//         />
//         {error && email.trim() === '' && <p className="text-red">Email is required</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block mb-1 text-gray">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className={`w-full px-3 py-1.5 border rounded-md ${
//             error ? 'border-red-500' : 'border-gray'
//           }`}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && password.trim() === '' && (
//           <p className="text-red"></p>
//         )}
//         {error && !validatePassword(password) && (
//           <p className="text-red">
//             Password must be at least 6 characters long, include atleast 1 Uppercase letter, 1 lowercase letter, 1 numeric value and 1 special character
//           </p>
//         )}
//       </div>
//       <div className="flex items-center justify-between mb-4 py-2">
//         <label htmlFor="remember" className="flex items-center   text-gray">
//           <input type="checkbox" id="remember" 
//           className={`mr-2 mt-1 bg-red ${error ? 'bg-red' : 'bg-white'} checked `}
//            />
//           Remember me
//         </label>
//         <Link to='/forgot-password' className='text-gray'>forgot-password?</Link>
//       </div>
//       <button type="submit" className="w-full bg-red text-white py-2 rounded-md ">Login</button>
//       <p className='text-gray py-4'>New user? <Link to='/register' className='text-red'>Register</Link></p>
//     <Snackbar open={invalidSnack} onClose={() => setInvalidSnack(false)} autoHideDuration={4000} anchorOrigin={{ vertical: 'top', horizontal: 'center', }}>
//       <Alert onClose={() => setInvalidSnack(false)} severity="error" sx={{ width: '100%' }}>
//         Invalid Email or Password!
//       </Alert>
//     </Snackbar>
//     </form>
//   );
// };

// export default LoginForm;

