// import React from 'react';
// import {login, logo} from "../assets"
// import styles from '../style';
// import RegisterForm from '../components/RegisterForm';
// import { Link } from 'react-router-dom';


// const Register = () => {
//   return (
//     <div className={`${styles.flexCenter} min-h-screen  flex-row md:bg-gradient-to-r from-redlight via-olive to-yellowlight relative shadow-md border-red mx-auto overflow-x-hidden `}>
//       <div className={`flex md:w-[900px] h-[1126px]  md:h-[75vh] md:items-center md:justify-center bg-gray-100 flex-col md:flex-row md:m-5 ss:mb-[50px] `}>
//         <div className="relative w-full md:w-1/2  sm:h-[50vh] md:h-[75vh]">
         
//           <img src={login} alt="Login SVG" className="w-full h-full object-cover hidden md:block"/>
//           <Link to="/">
//           <img src={logo} alt="Logo" className="md:absolute left-4 md:mx-6 top-4 my-4 h-[51px] w-[51px] mx-8 " /></Link>
         
//           <div className='flex flex-col justify-center items-center w-full absolute inset-0'>
//             <h1 className="font-monsteraat leading-[60px] items-center p-8 text-[36px] text-olive font-extrabold hidden md:block">
//               Therapy:{" "}<span className='text-black'>The art of turning</span>{' '}<span className='text-faintgray'>wounds</span> {" "}
//               <span className='text-black'>into</span> {" "}<span className='text-lightred'>wisdom</span>
//             </h1>
//           </div>
//         </div>
//         <div className={`${styles.flexStart} relative w-full md:w-1/2  h-auto  md:h-[75vh]  md:bg-graylight `}>
//           <div className={`px-10 py-5 md:mt-2 `}  >
//             <RegisterForm />
          
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { login, logo } from '../assets';
import styles from '../style';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div className={`${styles.flexCenter} min-h-screen  flex-row md:bg-gradient-to-r from-redlight via-olive to-yellowlight relative shadow-md border-red mx-auto overflow-x-hidden `}>
      <div className={`flex md:w-[900px] h-[1126px]  md:h-[75vh] md:items-center md:justify-center bg-gray-100 flex-col md:flex-row md:m-5 ss:mb-[50px] `}>
        <div className="relative w-full md:w-1/2  sm:h-[50vh] md:h-[75vh]">
          <img src={login} alt="Login SVG" className="w-full h-full object-cover hidden md:block" />
          {/* Wrap the logo with the Link component */}
          <Link to="/">
            <img src={logo} alt="Logo" className="md:absolute left-4 md:mx-6 top-4 my-4 h-[51px] w-[51px] mx-8" />
          </Link>
          <div className='flex flex-col justify-center items-center w-full absolute inset-0'>
            <h1 className="font-monsteraat leading-[60px] items-center p-8 text-[36px] text-olive font-extrabold hidden md:block">
              Therapy:{" "}<span className='text-black'>The art of turning</span>{' '}<span className='text-faintgray'>wounds</span> {" "}
              <span className='text-black'>into</span> {" "}<span className='text-lightred'>wisdom</span>
            </h1>
          </div>
        </div>
        <div className={`${styles.flexStart} relative w-full md:w-1/2  h-auto  md:h-[75vh]  md:bg-graylight `}>
          <div className={`px-10 py-5 md:mt-2`}  >
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;