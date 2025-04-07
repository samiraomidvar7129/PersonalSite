import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";
import { FcBusinesswoman } from "react-icons/fc";

const Qualification = () => {
  return (
    <Link
      href="/about"
      className="p-4 mt-8 w-full max-w-[300px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto bg-[#171717] rounded-2xl flex flex-col justify-end items-start shadow-md transition-all hover:shadow-lg"
    >
      <div className="w-full h-[200px] flex justify-center items-center">
        <FcBusinesswoman
          aria-hidden="true"
          className="text-[80px] sm:text-[90px] md:text-[100px]"
        />
      </div>

      <div className="w-full mt-4">
        <h6 className="text-sm text-zinc-400 mb-2">ABOUT ME</h6>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-lg sm:text-xl text-white">Qualification</h2>
          <TbArrowRightCircle
            aria-hidden="true"
            className="text-white text-3xl sm:text-4xl ml-4"
          />
        </div>
      </div>
    </Link>
  );
};

export default Qualification;