import { motion } from "framer-motion";
import Image from "next/image";

export default function BioSection() {
  return (
    <section className="w-[90%] md:w-[75%] mx-auto mt-8 flex flex-col-reverse lg:flex-row gap-6 justify-center items-center">
            <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[#171717] p-3 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-xl flex justify-center items-center"
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">Bio</h1>
        </div>
        <div className="bg-[#171717] rounded-xl p-4 sm:p-6 md:p-8 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-semibold py-2">
            Samira Omidvar
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300">
            Hey there! 😊 I am a student, diving into the worlds of cybersecurity and machine learning. 
            I write poems, stories, or tech stuff. Excited to learn and grow with you through the advancement of technology 🚀
          </p>
        </div>
      </motion.div>
    </section>
  );
}
