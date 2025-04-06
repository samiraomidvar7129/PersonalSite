import React from "react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


const Networks = () => {
  return (
    <div>
      <ul className=" flex justify-center items-center text-center mt-8 text-white">
        <li className=" mx-2 p-5 rounded-xl  text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900">
          <Link
            className="  px-2 text-3xl"
            href="https://github.com/samiraomidvar7129"
            title="github.com/samiraomidvar7129"
          >
            <IoLogoGithub />
          </Link>
        </li>
        <li className=" mx-2 p-5 rounded-xl  text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900">
          <Link className="  px-2 text-3xl" href="">
            <RxLinkedinLogo />
          </Link>
        </li>
        <li className="  mx-2 p-5 rounded-xl  text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900">
          <Link className=" px-2 text-3xl" href="">
            <FaTelegram />
          </Link>
        </li>
        <li className="  mx-2 p-5 rounded-xl  text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900">
          <Link className=" px-2 text-3xl" href="">
            <FaSquareInstagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Networks;
