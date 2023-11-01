import React, { useState } from 'react';
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from '../style';
import { addDetail } from '../features/cred/credSlice';
import { useDispatch, useSelector } from 'react-redux';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch()
  const details = useSelector((state) => state.cred.details);
  const userEmail = details ? details.email : null;
  const isAuth = details.isAuth;

  if (userEmail!=null && isAuth===false){
    dispatch(addDetail({ detail: { isAuth: true} }));
    console.log(details.isAuth);
  }

  // console.log(userEmail);
  

  return (
    <nav className={` w-full flex  pt-8 items-center justify-center  absolute `}>
      
      <img src={logo} alt="hoobank" className={`md:w-[60px] md:h-[60px] w-[50px] h-[50px] lg:ml-20 xl:ml-[160px] ml-8 ${styles.m}`} />
      <ul className="list-none font-monsteraat sm:flex hidden justify-center items-center w-[963px] h-[60px] flex-1">
     
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-monsteraat font-normal cursor-pointer lg:text-[25px] text-[20px]  ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-20'
            } text-white`}
          >
            <a href={`${nav.path}`}>{nav.title}</a>
          </li>
        ))}
        <li>
  
        {isAuth ? (
          <a href="/" className="font-montseraat font-normal cursor-pointer ml-20 text-[17px] text-white">
          <button className="lg:w-[156px] w-[120px] lg:h-[47px] h-[45px] ml-5 mr-5 bg-red text-white font-monsteraat rounded-2xl">
          Log Out
        </button>
        </a>
        
      ) : (
        <a href="/LoginPage" className="font-montseraat font-normal cursor-pointer ml-20 text-[17px] text-white">
          <button className="lg:w-[156px] w-[120px] lg:h-[47px] h-[45px] md:mr-5 mr-2 bg-red text-white font-monsteraat rounded-2xl">
            Log In
          </button>
        </a>
      )}
    </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] mr-3 object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-redlight  to-yellowlight absolute top-20 right-0 mx-4 my-2 min-w-[150px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-normal cursor-pointer text-[20px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-1'
                } text-white`}
              >
                <a href={`${nav.path}`}>{nav.title}</a>
              </li>
            ))}
            <li className=''>
              <a href="/LoginPage" className=" font-normal cursor-pointer mb-2 text-[20px] text-white">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;