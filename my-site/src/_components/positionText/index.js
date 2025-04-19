'use client';
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import Networks from "../network";

const PositionText=()=>{
    const translate = useTranslations(); // Using useTranslations to access messages

    return(
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#141414] rounded-xl w-full" >
        <div className="p-6 sm:p-8 flex flex-col items-center">
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] relative">
            <Image
              className="rounded-full object-cover"
              src="/imgs/logo/omidvar.webp"
              alt="profile picture of Samira"
              fill
              priority
            />
          </div>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mt-6 font-semibold text-center">
          {translate('name')} 
          </h1>
          <p className="text-[#9e9e9e] text-sm sm:text-base mt-3 text-center">
          {translate("introduce")}
          </p>
          <div className="mt-4">
            <Networks />
          </div>
        </div>
      </motion.div>
    )}
    export default PositionText;