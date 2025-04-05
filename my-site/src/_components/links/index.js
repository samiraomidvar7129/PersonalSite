import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const pathname = usePathname();

  return (
    <ul className="py-8 text-center  flex justify-center items-center  ">
      <li className="mx-8">
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
      </li>
      <li className="mx-8">
        <Link className={`link ${pathname === "/projects"}`} href="/projects">
          Portfolio
        </Link>
      </li>
      <li className="mx-8">
        <Link
          className={`link ${pathname === "/experience" ? "active" : ""}`}
          href="/experience"
        >
          experience
        </Link>
      </li>
      <li className=" mx-8">
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about" >
          About
        </Link>
      </li>
      <li className=" mx-8">
        <Link
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          href="/contact" >
          Contact
        </Link>
      </li>
    </ul>
  );
};
export default Links;
