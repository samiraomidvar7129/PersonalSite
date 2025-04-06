import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Networks from "../network";

const AboutComp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[75%] mx-auto  ">
        <div className="bg-[#141414] rounded-xl h-auto ">
            <div className="p-8">
            <Image
                    className="w-full h-full block bg-cover rounded-xl"
                    src="/imgs/logo/profile.jpg"
                    alt="portfolio-img"
                    width={100}
                    height={100}
                  />
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <h1 className="text-white text-3xl py-2">Samira Omidvar</h1>
              <p className="py-4 text-[#9e9e9e] text-lg">FrontEnd Developer</p>
              <Networks />
            </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex flex-col justify-end items-start">
            <h2 className="py-4 text-2xl text-white text-center">Who is Samira?</h2>
            <p className="leading-[32px] py-4 text-sm text-justify text-[#9e9e9e]">
              Hello! I am [Samira], a front-end developer with four years of
              experience in the world of coding and web programming. Since I was
              introduced to the world of programming as a self-taught person, I
              was able to quickly improve my skills and enter this amazing
              profession. With a passion and enthusiasm for continuous learning
              and participating in various specialized courses, I gradually
              became an experienced front-end developer. Throughout my career, I
              have developed various projects for my portfolio, each of which
              demonstrates my capabilities and skills in using the latest
              technologies and frameworks in the world. I love challenging
              projects and am always striving to use the best methods to solve
              problems and provide an optimal user experience for users.
              Currently, I am working as a Front-End Developer at a leading
              tourism startup. In this role, I am responsible for designing and
              implementing user interfaces using modern frameworks such as
              React, Next.js, Tailwind CSS, and other front-end technologies.
            </p>
          </div>
          <div className="flex flex-col justify-end items-start">
            <h2 className="py-4 text-2xl text-white text-center">why me ?</h2>
            <ul className="flex flex-col justify-end items-start w-full text-[#9e9e9e]">
              <li className="py-4 text-sm text-nowrap">
                Modern Web Development: Proficient in popular frameworks and
                libraries such as React.js and Next.js.
              </li>
              <li className=" py-4 text-xs text-nowrap">
                Responsive Design and UI/UX: Proficient in responsive design and
                user experience for different devices.
              </li>
              <li className=" py-4 text-xs text-nowrap">
                Commitment to continuous learning: Always updating skills and
                learning new technologies.
              </li>
              <li className=" py-4 text-xs text-nowrap">
                Solving challenging problems: Always looking to solve complex
                problems and optimize website performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutComp;
