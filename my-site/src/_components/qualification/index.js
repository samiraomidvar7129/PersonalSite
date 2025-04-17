import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";

const Qualification = () => {
  const translate = useTranslations(); // Using useTranslations to access messages
  
  return (
    <Link
      href="/about"
      className="p-3 mt-8 cursor-pointer w-full max-w-[300px] h-[400px] bg-[#171717] rounded-2xl flex flex-col justify-end items-start
        sm:max-w-[300px] sm:h-[400px] 
        md:max-w-[350px] md:h-[420px] 
        lg:max-w-[400px] lg:h-[450px]" >
      <div className="w-full h-full flex justify-center items-center text-center relative">
        <Image
          src="/imgs/icons/about.png"
          alt="Qualification Icon"
          width={110}
          height={110}
          priority={true}
          className="object-contain" />
      </div>
      <div>
        <span className="text-sm sm:text-base md:text-lg text-zinc-400 py-2">
        {translate("aboutMe")}
        </span>
        <div className="w-full flex justify-between items-center">
          <span className="text-lg sm:text-xl lg:text-xl xl:text-3xl text-white py-2">
          {translate("qualification")}
          </span>
          <TbArrowRightCircle
            aria-hidden="true"
            className="text-white text-3xl sm:text-4xl ml-4"/>
        </div>
      </div>
    </Link>
  )};
export default Qualification;