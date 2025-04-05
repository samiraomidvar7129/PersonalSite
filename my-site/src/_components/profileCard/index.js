import React from "react";
import Image from "next/image";
import Link from "next/link";
import Networks from "../network";
import { TbArrowRightCircle } from "react-icons/tb";

const ProfileCard = () => {
  return (
    <div className="profileCard  p-3 w-[500px] h-[400px] bg-[#171717] rounded-2xl flex justify-center items-center text-center ">
      <div className="w-full p-4">
        <Image
          className="profileCard-item__img m-auto w-[100px] h-[100px]"
          priority={true}
          src="/imgs/omidvar.webp"
          alt="WebSite Owner"
          width={300}
          height={300}
        />
      </div>
     <div className="flex flex-col justify-center items-center text-center ">
     <h5 className=" py-2 text-white text-3xl">
        Samira Omidvar
      </h5>
      <h6 className="py-2 text-white text-sm text-zinc-400">
        A passionate frontend developer from Iran
      </h6>
      <div className="py-4 flex justify-between items-center text-center ">
          <Link href="" download  className="text-zinc-400 text-sm px-2">
            Download CV
          </Link>
          <TbArrowRightCircle className="text-white"/>
        </div>
      <div className="pt-4">
        <Networks />
      </div>
     </div>
    </div>
  );
};
export default ProfileCard;
