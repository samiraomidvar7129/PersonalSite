import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Networks = () => {
  return (
    <div>
    <ul className="flex justify-center items-center text-center mt-8 text-white space-x-4 md:space-x-6">
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300" role="listitem">
        <Link
          className="px-2 text-2xl sm:text-3xl"
          href="https://github.com/samiraomidvar7129"
          title="www.github.com"
          aria-label="Github Profile"
          target="_blank"
        >
          <IoLogoGithub aria-hidden="true" />
        </Link>
      </li>
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300" role="listitem">
        <Link className="px-2 text-2xl sm:text-3xl" 
        href="https://www.linkedin.com/in/samira-omidvar-6038ab234"
        title="www.linkedin.com"
        aria-label="Linkedin Profile"
        target="_blank">
          <RxLinkedinLogo aria-hidden="true" />
        </Link>
      </li>
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300" role="listitem">
        <Link className="px-2 text-2xl sm:text-3xl" 
         href="#"
         title="www.telegram.com"
         aria-label="Telegram Profile"
         target="_blank">
          <FaTelegram aria-hidden="true" />
        </Link>
      </li>
      <li className="mx-2 p-4 rounded-xl text-center flex justify-center items-center bg-[#242424] hover:bg-white hover:text-zinc-900 transition duration-300" role="listitem">
        <Link className="px-2 text-2xl sm:text-3xl"
         href="#"
         title="www.instagram.com"
         aria-label="Instagram Profile"
         target="_blank">
          <FaSquareInstagram aria-hidden="true" />
        </Link>
      </li>
    </ul>
  </div>
  )};
export default Networks;