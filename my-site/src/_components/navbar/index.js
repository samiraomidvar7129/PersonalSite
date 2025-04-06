'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Links = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div className="flex justify-between items-center py-4 px-6 md:hidden">
        <div className="text-xl font-bold">$.Omidvar</div>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      <ul className={`fixed top-0 left-0 w-3/4 h-full  bg-[#1c1c1c] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col justify-center items-center`}>
      <button onClick={toggleMenu} className="absolute  bg-[#1a1a1a] p-2 top-4 right-4 text-white ">
             <FaTimes size={24} />
        </button>
        <li className="mx-8 my-4">
          <Link className={`link text-white hover:text-gray-300 ${pathname === "/" ? "active" : ""}`} href="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link className={`link text-white hover:text-gray-300 ${pathname === "/bio" ? "active" : ""}`} href="/bio" onClick={toggleMenu}>
            Bio
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link className={`link text-white hover:text-gray-300 ${pathname === "/projects" ? "active" : ""}`} href="/projects" onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link className={`link text-white hover:text-gray-300 ${pathname === "/experience" ? "active" : ""}`} href="/experience" onClick={toggleMenu}>
            Experience
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link className={`link text-white hover:text-gray-300 ${pathname === "/about" ? "active" : ""}`} href="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li className="mx-8 my-4">
          <Link className={`link text-white hover:text-gray-300 ${pathname === "/contact" ? "active" : ""}`} href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>

      {/* فقط در صفحه نمایش‌های بزرگ نمایش داده شود */}
      <ul className="hidden md:flex md:py-8 md:text-center md:flex-wrap md:justify-center">
        <li className="mx-8">
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li className="mx-8">
          <Link className={`link ${pathname === "/bio" ? "active" : ""}`} href="/bio">
            Bio
          </Link>
        </li>
        <li className="mx-8">
          <Link className={`link ${pathname === "/projects" ? "active" : ""}`} href="/projects">
            Portfolio
          </Link>
        </li>
        <li className="mx-8">
          <Link className={`link ${pathname === "/experience" ? "active" : ""}`} href="/experience">
            Experience
          </Link>
        </li>
        <li className="mx-8">
          <Link className={`link ${pathname === "/about" ? "active" : ""}`} href="/about">
            About
          </Link>
        </li>
        <li className="mx-8">
          <Link className={`link ${pathname === "/contact" ? "active" : ""}`} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
