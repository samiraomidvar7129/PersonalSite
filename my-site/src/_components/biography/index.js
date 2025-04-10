import { motion } from "framer-motion";
import BioImage from "../bioImage";
export default function BioSection() {
  return (
    <section className="w-[90%] md:w-[75%] mx-auto mt-8 flex flex-col lg:flex-row gap-6 justify-center items-center">
      <BioImage/>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col justify-start items-center text-center lg:items-start lg:text-left w-full"
      >
        <div className="w-full h-auto mb-4">
          <span className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            Bio
          </span>
        </div>
        <div className="bg-[#171717] rounded-xl p-4 sm:p-6 md:p-8 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-1">
            Samira Omidvar
          </h1>
          <p className="text-xs sm:text-sm md:text-lg  sm:h-autoleading-relaxed text-zinc-300 text-justify px-2 pt-2 sm:px-4 md:px-6">
             😊 Samira a front-end developer with 4 years of experience. Specializing in designing and implementing user-friendly websites and optimizing user experience. ● Eager to take on new challenges and collaborate with creative teams.
            .🚀
          </p>
        </div>
      </motion.div>
    </section>
  );
}
