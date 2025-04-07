import Image from "next/image";
import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";

const Portfolio = () => {
  return (
    <Link
      href="/experience"
      className="p-3  mt-8 cursor-pointer w-[300px] h-[400px] bg-[#171717] rounded-2xl flex flex-col justify-end items-start"
    >
      <div className="w-full">
        <Image
          
          src="/imgs/portfolio.png"
          alt="portfolio"
          width={100}
          height={100}
          priority={true}
        />
      </div>
      <div >
        <h6 className="text-sm text-zinc-400 py-2">CV</h6>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-xl text-white py-2 ">Portfolio</h2>
          <TbArrowRightCircle className="text-white text-4xl ml-8" />
        </div>
      </div>
    </Link>
  );
};
export default Portfolio;
