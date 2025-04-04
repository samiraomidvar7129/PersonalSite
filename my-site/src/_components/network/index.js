import React from 'react';
import Link from 'next/link';
import './network.css';
import { IoHomeOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";

const Networks = () => {
  return (
    <div className='networks-wrapper'>
        <ul className='networks-wrapper__list  d-flex justify-content-center align-items-center text-center '>
        <li className='networks-wrapper__list--item px-2 text-center d-flex justify-content-center align-items-center   '>
          <Link  className=' networks-wrapper__list--item-link text-white px-2' href=''><IoHomeOutline/></Link>
        </li>
        <li className='networks-wrapper__list--item px-2 text-center d-flex justify-content-center align-items-center  '>
          <Link className=' networks-wrapper__list--item-link text-white px-2' href=''><CiUser/></Link>
        </li>
        <li className='networks-wrapper__list--item px-2 text-center d-flex justify-content-center align-items-center  '>
          <Link className=' networks-wrapper__list--item-link text-white px-2' href=''><TiShoppingBag/></Link>
        </li>
        <li className='networks-wrapper__list--item px-2 text-center d-flex justify-content-center align-items-center  '>
          <Link className=' networks-wrapper__list--item-link text-white px-2' href=''><CiUser/></Link>
        </li>
      </ul> 
    </div>
  )}
export default Networks