import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";


const Profile = () => {
  return (
    <div
      className=" p-3  w-[300px] h-[300px] bg-[#171717] rounded-2xl flex flex-col justify-end items-start">
      <div className="w-full gap-2 h-[200px] flex justify-center items-center bg-[##1c1c1c] border border-1 border-zinc-600  rounded-lg">
       <Link href="https://github.com/samiraomidvar7129" title="github.com/samiraomidvar7129" className="block w-24 h-24 flex justify-center items-center hover:bg-zinc-500 rounded-4xl border border-1 border-zinc-200">
       <IoLogoGithub className="text-4xl text-white"/>
       </Link>
       <Link href="" className="block w-24 h-24 flex justify-center items-center hover:bg-zinc-500 rounded-4xl border border-1 border-zinc-200">
       <RxLinkedinLogo className="text-4xl text-white"/>
       </Link>
      </div>
      <div >
        <h6 className="text-sm text-zinc-400 py-4">Stay Connected</h6>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-xl text-white py-2">Profiles</h2>
          <TbArrowRightCircle className="text-white text-4xl ml-8" />
        </div>
      </div>
    </div>
  );
};
export default Profile;
