import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-hamburger.svg';
import Close from '../images/icon-close.svg';

function Navbar() {
  const [nav, setNav] = useState(false);

  // Resonsive Function
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <header className="bg-white absolute top-0 left-0 right-0 h-auto z-10 w-full shadow-lg">
      <div className="flex justify-between items-center px-[22px] py-[24px] md:py-0 max-w-[1100px] mx-auto sticky z-10 lg:px-0">
        <img src={Logo} alt="Logo" />
        <div>
          <ul role="list" className="hidden md:flex justify-between space-x-[24px] text-neutral-400 text-[14px]">
            <li><a className="gradient-border py-[28px] inline-block hover:text-dark-blue transition-colors duration-[0.3s]" href="#">Home</a></li>
            <li><a className="gradient-border py-[28px] inline-block hover:text-dark-blue transition-colors duration-[0.3s]" href="#">About</a></li>
            <li><a className="gradient-border py-[28px] inline-block hover:text-dark-blue transition-colors duration-[0.3s]" href="#">Contact</a></li>
            <li><a className="gradient-border py-[28px] inline-block hover:text-dark-blue transition-colors duration-[0.3s]" href="#">Blog</a></li>
            <li><a className="gradient-border py-[28px] inline-block hover:text-dark-blue transition-colors duration-[0.3s]" href="#">Careers</a></li>
          </ul>
        </div>

        {/* Use For hidden Navbar of  Resposive when them did not use smallpages */}
        <div className="overlay fadein hidden h-[100vh] w-full absolute top-[67.5px] left-0 right-0 bottom-0 bg-gradient-to-b from-dark-blue to-dark-blue-light opacity-80"></div>

       {/* The Stage of Navbar Responsive */}
        {nav ? (
          <div className="scaleUp fixed top-[80px] left-[50%]">
            <ul role="list" className="absolute left-[50%] -translate-x-[50%] text-center bg-white px-[130px] py-[32px] rounded-[5px] text-dark-blue w-[90vw] mx-auto">
              <li className="pb-[24px]"><a className="hover:text-green transition-colors duration-200" href="#">Home</a></li>
              <li className="pb-[24px]"><a className="hover:text-green transition-colors duration-200" href="#">About</a></li>
              <li className="pb-[24px]"><a className="hover:text-green transition-colors duration-200" href="#">Contact</a></li>
              <li className="pb-[24px]"><a className="hover:text-green transition-colors duration-200" href="#">Blog</a></li>
              <li><a className="hover:text-green transition-colors duration-200" href="#">Careers</a></li>
            </ul>
          </div>
        ) : null}

        <button className=" hidden md:block bg-gradient-to-br from-green to-cyan text-white px-[32px] py-[12px] rounded-[50vw] font-bold text-[14px] hover:from-green-light hover:to-cyan-light transition-colors duration-[0.1s]">
          Renew Invite
        </button>

        <div className="cursor-pointer md:hidden">
          <span className="sr-only">Menu Bar</span>
          {/* Use the "handleNav" function to toggle the mobile navigation */}
          <img onClick={handleNav} className="menu-open transition-opacity" src={nav ? Close : Hamburger}  />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
