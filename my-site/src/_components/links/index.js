import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineContactSupport } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

const Links = () => {
  const pathname = usePathname();

  return (
    <ul className="p-0 text-center  flex flex-col justify-center items-center  ">
      <li>
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          <IoHomeOutline className="text-3xl text-yellow-700 transition delay-200 ease-in-out hover:text-yellow-600" />
        </Link>
      </li>
      <li className="-5">
        <Link className={`link ${pathname === "/projects"}`} href="/projects">
          <LiaProjectDiagramSolid className=" text-3xl text-yellow-700 transition delay-200 ease-in-out hover:text-yellow-600" />
        </Link>
      </li>
      <li className="mt-5">
        <Link
          className={`link ${pathname === "/experience" ? "active" : ""}`}
          href="/experience"
        >
          <GrUserExpert className=" text-3xl text-yellow-700 transition delay-200 ease-in-out hover:text-yellow-600" />
        </Link>
      </li>
      <li className=" mt-5">
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          <MdOutlineContactSupport className=" text-3xl text-yellow-700 transition delay-200 ease-in-out hover:text-yellow-600" />
        </Link>
      </li>
      <li className=" mt-5">
        <Link
          className={`link ${pathname === "/contact" ? "active" : ""}`}
          href="/contact"
        >
          <TiContacts className=" text-3xl text-yellow-700 transition delay-200 ease-in-out hover:text-yellow-600" />
        </Link>
      </li>
    </ul>
  );
};
export default Links;
