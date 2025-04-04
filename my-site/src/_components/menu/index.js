'use client';

import React from 'react';
import Link from 'next/link';
import './myLinks.css';
import { usePathname } from 'next/navigation';
import Logo from '../logo';
import { IoHomeOutline } from "react-icons/io5";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

 function MyLinks() {
  const pathname=usePathname();

  return (
  <div className=' w-100 h-100 d-flex justify-content-between align-items-center '>
    <nav className='navbar-wrapper p-3  d-flex flex-column justify-content-center align-items-center w-100 h-75' >
    <div><Logo/></div> 
    <ul className='menu-wrapper  p-0 text-center  d-flex flex-column justify-content-center align-items-center   w-100 h-75   '>
       
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/"><IoHomeOutline className='menu-wrapper__item--link-icon'/></Link>
        </li>
        <li className='menu-item mt-5'>
          <Link  className={`link ${pathname === "/projects"}`} href="/projects"><LiaProjectDiagramSolid className='menu-wrapper__item--link-icon'/></Link>
        </li>
        <li className='menu-item mt-5'>
        <Link  className={`link ${pathname === "/experience" ? "active" : ""}`} href="/experience"><GrUserExpert className='menu-wrapper__item--link-icon'/></Link>
        </li>
        <li className='menu-item mt-5'>
          <Link  className={`link ${pathname === "/about" ? "active" : ""}`} href="/about"><MdOutlineContactSupport className='menu-wrapper__item--link-icon'/></Link>
        </li>
        <li className='menu-item mt-5'>
          <Link  className={`link ${pathname === "/contact" ? "active" : ""}`} href="/contact"><TiContacts className='menu-wrapper__item--link-icon'/></Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}; export default MyLinks;