import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";

const Profile = () => {
  return (
    <div
      className="p-4 w-full max-w-[300px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] h-auto bg-[#171717] rounded-2xl flex flex-col justify-end items-start"
    >
      <div className="w-full gap-4 h-auto py-6 flex justify-center items-center bg-[#1c1c1c] border border-zinc-600 rounded-lg">
        <Link
          href="https://github.com/samiraomidvar7129"
          title="www.github.com"
          aria-label="Github Profile"
          target="_blank"
          className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center hover:bg-zinc-500 rounded-full border border-zinc-200 transition-all duration-300"
        >
          <IoLogoGithub aria-hidden="true" className="text-3xl md:text-4xl text-white" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/samira-omidvar-6038ab234"
          title="www.linkedin.com"
          aria-label="Linkedin Profile"
          target="_blank"
          className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center hover:bg-zinc-500 rounded-full border border-zinc-200 transition-all duration-300"
        >
          <RxLinkedinLogo aria-hidden="true" className="text-3xl md:text-4xl text-white" />
        </Link>
      </div>

      <div className="w-full mt-4">
        <h6 className="text-sm text-zinc-400">Stay Connected</h6>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg md:text-xl text-white py-2">Profiles</h2>
          <TbArrowRightCircle aria-hidden="true" className="text-white text-3xl md:text-4xl ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
