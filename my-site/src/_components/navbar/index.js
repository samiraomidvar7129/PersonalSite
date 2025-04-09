"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../logo";

const Navbar=()=> {
  
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
// Change Route / Close Menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/bio", label: "Bio" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="relative">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center py-4 px-6 lg:hidden">
        <Logo />
        <button onClick={toggleMenu} className="text-white">
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-[#1c1c1c] transition-transform duration-300 ease-in-out z-50 flex flex-col justify-center items-center lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 bg-[#1a1a1a] p-2 text-white"
        >
          <FaTimes size={24} />
        </button>

        {navLinks.map((link) => (
          <li key={link.href} className="my-4">
            <Link
              href={link.href}
              className={`text-[#9e9e9e] hover:text-gray-300 ${
                pathname === link.href ? "text-white font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex py-6 justify-center items-center text-[#9e9e9e] gap-8">
      
        <Logo />
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-gray-300 ${
                pathname === link.href ? "text-white font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;