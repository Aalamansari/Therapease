
import React, { useState } from 'react';
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from '../style';

const Navbartest = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={` w-full flex  pt-8 items-center justify-center  absolute `}>
      
      <img src={logo} alt="hoobank" className={`md:w-[60px] md:h-[60px] w-[40px] h-[40px] lg:ml-20 xl:ml-[160px] ml-8 md:mt-0 mt-[-20px] ${styles.m}`} />
      <ul className="list-none font-monsteraat sm:flex hidden justify-center items-center w-[963px] h-[60px] flex-1">
     
        {navLinks.map((nav, index) => (
          <li
            key={nav.path}
            className={`font-monsteraat font-normal cursor-pointer lg:text-[25px] text-[20px]  ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-20'
            } text-white`}
          >
            <a href={`${nav.path}`}>{nav.title}</a>
          </li>
        ))}
        <li>
  <a href="/LoginPage" className="font-montseraat font-normal cursor-pointer ml-20 text-[17px] text-white">
    <button className="lg:w-[156px] w-[120px] lg:h-[47px] h-[45px] md:mr-5 mr-2 bg-red text-white font-monsteraat  rounded-2xl">Log In</button>
  </a>
    </li>
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] mr-3 mt-[-20px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-redlight  to-yellowlight absolute top-16 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl sidebar`}
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
              <a href="/LoginPage" className="font-normal cursor-pointer mb-2 text-[20px] text-white">Log In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbartest;
