import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const ProfileCard = () => {
  const translate = useTranslations(); // Using useTranslations to access messages

  return (
    <div className="p-4 w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px] bg-[#171717] rounded-2xl flex flex-col justify-center items-center text-center shadow-lg">
      <div className="w-full flex justify-center items-center mb-4">
        <Image
          className="rounded-full"
          priority={true}
          src="/imgs/logo/omidvar.webp"
          alt="Samira Omidvar"
          width={160}
          height={160}/>
      </div>
      <div className="flex flex-col justify-center items-center px-2">
        <h1 className="py-1 text-white text-lg sm:text-xl md:text-2xl font-semibold">
          {translate("name")}
        </h1>
        <h2 className="py-1 text-zinc-400 text-sm sm:text-base">
          {translate("introduce")}
        </h2>

        <div className="py-4 flex items-center gap-5">
          <Link
            href="/path-to-cv.pdf"
            download
            className="text-zinc-400 text-sm hover:underline transition duration-200"
          >
            {translate("cvDownload")}
          </Link>
          <FaArrowUpFromBracket
            aria-hidden="true"
            className="text-white text-xl sm:text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
