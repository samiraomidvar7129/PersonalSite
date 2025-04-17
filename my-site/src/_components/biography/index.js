import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import Image from "next/image";

export default function BioSection() {
  const translate = useTranslations(); // Using useTranslations to access messages

  return (
    <section className="w-[90%] md:w-[75%] mx-auto mt-8 flex flex-col lg:flex-row gap-6 justify-center items-center">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#171717] p-3 rounded-xl flex justify-center items-center overflow-hidden 
        w-38 h-38 sm:w-60 sm:h-60 md:w-60 md:h-60 lg:w-60 lg:h-60"
      >
        <Image
          className="rounded-xl object-cover w-full h-full"
          src="/imgs/logo/omidvar.webp"
          alt="Samira Omidvar"
          width={300}
          height={300}
          priority={true}
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col justify-start items-center text-center lg:items-start lg:text-left w-full"
      >
        <div className="w-full h-auto mb-4">
          <span className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            {translate('bio')} 
          </span>
        </div>
        <div className="bg-[#171717] rounded-xl p-4 sm:p-6 md:p-8 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-1">
            {translate('name')} 
          </h1>
          <p className="text-xs sm:text-sm md:text-lg sm:h-auto leading-relaxed text-zinc-300 text-justify px-2 pt-2 sm:px-4 md:px-6">
            {translate('webProgramming')} 
          </p>
        </div>
      </motion.div>
    </section>
  );
}
