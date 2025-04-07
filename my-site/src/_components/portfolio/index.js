import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";
import { FcAnswers } from "react-icons/fc";

const Portfolio = () => {
  return (
    <Link
      href="/experience"
      className="p-3 mt-8 cursor-pointer w-full max-w-[300px] h-[400px] bg-[#171717] rounded-2xl flex flex-col justify-end items-start
        sm:max-w-[300px] sm:h-[400px] 
        md:max-w-[350px] md:h-[420px] 
        lg:max-w-[400px] lg:h-[450px]"
    >
      <div className="w-full h-full flex justify-center items-center text-center">
        <FcAnswers
          aria-hidden="true"
          className="text-[80px] sm:text-[90px] md:text-[100px] lg:text-[110px]"
        />
      </div>
      <div>
        <h6 className="text-sm text-zinc-400 py-2">CV</h6>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-white py-2">Portfolio</h2>
          <TbArrowRightCircle
            aria-hidden="true"
            className="text-white text-3xl sm:text-4xl ml-4"
          />
        </div>
      </div>
    </Link>
  );
};

export default Portfolio;
