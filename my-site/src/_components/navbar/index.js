"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  useLocale } from 'next-intl';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../logo";

const Navbar=()=> {
  const translate = useTranslations(); // Using useTranslations to access messages
  const locale = useLocale();

  const locales = ['en', 'fa'];

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    window.location.reload(); 
  };
  
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  
// Change Route / Close Menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", key: "home" },
    { href: "/bio", key: "bio" },
    { href: "/projects", key: "projects" },
    { href: "/experience", key: "experience" },
    { href: "/about", key: "about" },
    { href: "/contact", key: "contact" },
  ];

  return (
    <nav className="relative">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center text-[#9e9e9e] py-4 px-6 lg:hidden">
        <button onClick={toggleMenu} className="text-white" aria-label="menu">
          <FaBars size={24} aria-label="menu" />
        </button>
        <Logo />
          <select className="bg-[#272727] text-white border border-[#444] 
          rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2
           focus:ring-blue-500 transition-all duration-200" value={locale} onChange={handleLocaleChange}>
        {locales.map((l) => (
          <option key={l} value={l}>
            {l === 'fa' ? 'فارسی' : 'English'}
          </option>
        ))}
      </select>
      </div>

      {/* Mobile Menu */}
      <ul 
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-[#1c1c1c]
           transition-transform duration-300 ease-in-out z-50 flex flex-col
            justify-center items-center lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`} >
         <li className="my-4" role="listitem">
    <button
      aria-label="close"
      onClick={toggleMenu}
      className="absolute top-4 right-4 bg-[#1a1a1a] p-2 text-white"
    >
      <FaTimes size={24} aria-hidden="true" />
    </button>
       </li>

        {navLinks.map((link) => (
          <li key={link.href} className="my-4" role="listitem">
            <Link
              href={link.href}
              className={`text-[#9e9e9e] hover:text-gray-300 ${
                pathname === link.href ? "text-white font-semibold" : ""
              }`} >
              {translate(link.key)}
              </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex py-6 justify-center items-center text-[#9e9e9e] gap-8" >
        <li role="listitem">
          <select className="bg-[#272727] text-white border border-[#444] 
          rounded-lg px-4 py-2 w-full shadow-md focus:outline-none focus:ring-2
           focus:ring-blue-500 transition-all duration-200" value={locale} onChange={handleLocaleChange}>
        {locales.map((l) => (
          <option key={l} value={l}>
            {l === 'fa' ? 'فارسی' : 'English'}
          </option>
        ))}
      </select></li>
        <li role="listitem"><Logo /></li>
        {navLinks.map((link) => (
          <li key={link.href} role="listitem">
            <Link
              href={link.href}
              className={`hover:text-gray-300 ${
                pathname === link.href ? "text-white font-semibold" : ""
              }`}>
              {translate(link.key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;