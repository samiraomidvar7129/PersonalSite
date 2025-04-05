'use client';
import React from 'react';
import Logo from '../logo';
import Links from '../links';

 const Navbar=()=> {
  return (
    <nav className='container w-[75%]  py-8 mx-auto flex justify-between items-center  ' >
    <div className=' flex-grow-1 '>Logo</div> 
    <div className='flex-grow-4 '>
    <Links/>
    </div>
    <div>Dark</div>
    </nav>
  )
}; export default Navbar;