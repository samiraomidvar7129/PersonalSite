import React from 'react';
import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";

const Networks = () => {
  return (
    <div>
        <ul className=' flex justify-center items-center text-center '>
        <li className=' px-2 text-center flex justify-center items-center   '>
          <Link  className=' text-white px-2 text-2xl' href=''><IoHomeOutline/></Link>
        </li>
        <li className='px-2 text-center flex justify-center items-center'>
          <Link className=' text-white px-2 text-2xl' href=''><CiUser/></Link>
        </li>
        <li className=' px-2 text-center flex justify-center items-center'>
          <Link className='text-white px-2 text-2xl' href=''><TiShoppingBag/></Link>
        </li>
        <li className=' px-2 text-center flex justify-center items-center'>
          <Link className='text-white px-2 text-2xl' href=''><CiUser/></Link>
        </li>
      </ul> 
    </div>
  )}
export default Networks