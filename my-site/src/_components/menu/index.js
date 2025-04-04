'use client';
import React from 'react';
import Logo from '../logo';
import Links from '../links';

 function MenuComp() {

  return (
  <div className=' flex justify-between items-center fixed top-[30%] left-[0]'>
    <nav className=' p-3 h-full flex flex-col justify-center items-center ml-5 border border-1 border-yellow-700  rounded-[50px] ' >
    <div><Logo/></div> 
    <Links/>
    </nav>
    </div>
  )
}; export default MenuComp;