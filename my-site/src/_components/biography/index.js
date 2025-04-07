import Image from "next/image";
import { motion } from "framer-motion";
const Biography = () => {
  return (

    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    animate={{ opacity: 1 }}
  >
     <section className="w-[75%] gap-4 mx-auto mt-8 flex  justify-end items-start">
      <div className="bg-[#171717] p-3 w-[300px] h-[300px] rounded-xl">
        <Image
          className="w-full h-full block bg-cover rounded-xl"
          src="/imgs/logo/omidvar.webp"
          alt="SamiraOmidvar"
          width={100}
          height={100}
          priority={true}
        />
      </div>
      <div className="flex flex-col justify-start items-center ">
        <div className="w-full h-24">
          <h1 className="text-6xl text-white text-center">Bio</h1>
        </div>
        <div className="bg-[#171717] rounded-xl p-8">
          <h1 className="text-3xl text-white py-3 ">Samira Omidvar</h1>
          <p className="text-sm leading-[32px] py-2">
            Hey there! 😊 I Am a student , diving into the worlds of
            cybersecurity and machine learning. I write poems , stories or tech
            stuff. Excited to learn and grow with you the advancement of
            technology 🚀
          </p>
        </div>
      </div>
    </section>
    </motion.div>
   
  );
};
export default Biography;
