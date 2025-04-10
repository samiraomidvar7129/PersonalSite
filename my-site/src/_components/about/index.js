'use client0';
import { useEffect,useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Networks from "../network";

const AboutComp=()=> {

  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // شبیه‌سازی تاخیر لود دیتا یا فونت
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const shortText =
    "Hello! I am Samira, a front-end developer with four years of experience in web programming.";
  const fullText =
    " Starting as a self-taught learner, I advanced quickly by working on real projects and embracing continuous learning. Currently, I work at a leading tourism startup using modern frameworks like React, Next.js, and Tailwind CSS to create smooth, responsive user experiences.";

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#141414] rounded-xl w-full"
        >
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
              Samira Omidvar
            </h1>
            <p className="text-[#9e9e9e] text-sm sm:text-base mt-3 text-center">
              FrontEnd Developer
            </p>
            <div className="mt-4">
              <Networks />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div>
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4 text-center lg:text-left">
              Who is Samira?
            </h2>
            <div className="p-4">
      {loading ? (
        <div className="space-y-2 animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-3/4" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-5/6" />
        </div>
      ) : (
        <>
          <p className="text-sm sm:text-base leading-relaxed text-[#9e9e9e] text-justify">
            {shortText}
            {expanded && fullText}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-blue-500 hover:underline text-sm"
          >
            {expanded ? " Show less" : " read more"}
          </button>
        </>
      )}
    </div>

          </div>

          <div>
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4 text-center lg:text-left">
              Why me?
            </h2>
            <ul className="list-disc pl-6 text-[#9e9e9e] text-sm sm:text-base space-y-2" role="list">
              <li role="listitem">Modern Web Development with React.js & Next.js</li>
              <li role="listitem">Responsive UI/UX for all device types</li>
              <li role="listitem">Commitment to continuous learning</li>
              <li role="listitem">Problem-solving and performance optimization</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default AboutComp;