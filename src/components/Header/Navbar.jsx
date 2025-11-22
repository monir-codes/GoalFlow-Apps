import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return (
<div className="navbar bg-base-100 md:px-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li><a>Apps</a></li>
      <li><a>Installation</a></li>
      </ul>
    </div>
    
    <div className='flex items-center gap-2'>
        <img className='w-2/12 md:w-1/12 ' src={Logo} alt="Logo" />
        <h2 className="font-bold text-md md:text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">GoalFlow.io</h2>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Apps</a></li>
      <li><a>Installation</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-r flex items-center from-[#632EE3] to-[#9F62F2] text-white"><span className='text-xl'><i class="fa-brands fa-github"></i></span> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;