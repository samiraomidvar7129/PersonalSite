import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


const Networks = () => {
  return (
    <div>
    <ul className="flex justify-center items-center text-center mt-8 text-white space-x-4 md:space-x-6">
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300">
        <Link
          className="px-2 text-2xl sm:text-3xl"
          href="https://github.com/samiraomidvar7129"
          title="github.com/samiraomidvar7129"
        >
          <IoLogoGithub aria-hidden="true" />
        </Link>
      </li>
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300">
        <Link className="px-2 text-2xl sm:text-3xl" href="#">
          <RxLinkedinLogo aria-hidden="true" />
        </Link>
      </li>
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300">
        <Link className="px-2 text-2xl sm:text-3xl" href="#">
          <FaTelegram aria-hidden="true" />
        </Link>
      </li>
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300">
        <Link className="px-2 text-2xl sm:text-3xl" href="#">
          <FaSquareInstagram aria-hidden="true" />
        </Link>
      </li>
    </ul>
  </div>
  
  );
};
export default Networks;
