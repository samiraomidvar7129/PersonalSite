import Image from "next/image";
import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";

const ProfileCard = () => {
  return (
    <div className="p-4 w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px] bg-[#171717] rounded-2xl flex flex-col justify-center items-center text-center shadow-lg">
      <div className="w-full flex justify-center items-center mb-4">
        <Image
          className="rounded-full"
          priority={true}
          src="/imgs/logo/omidvar.webp"
          alt="Samira Omidvar"
          width={160}
          height={160}
        />
      </div>

      <div className="flex flex-col justify-center items-center px-2">
        <h5 className="py-1 text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Samira Omidvar
        </h5>
        <h6 className="py-1 text-zinc-400 text-sm sm:text-base">
          A passionate frontend developer from Iran
        </h6>

        <div className="py-4 flex items-center gap-2">
          <Link
            href="/path-to-cv.pdf"
            download
            className="text-zinc-400 text-sm hover:underline transition duration-200"
          >
            Download CV
          </Link>
          <TbArrowRightCircle
            aria-hidden="true"
            className="text-white text-xl sm:text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
