'use client'
import Portfolio from "@/_components/portfolio";
import Profile from "@/_components/profile";
import ProfileCard from "@/_components/profileCard";
import Qualification from "@/_components/qualification";
import SkillsText from "@/_components/skillsText";
import { motion } from "framer-motion";
export default function Home() {
  return (
    
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    animate={{ opacity: 1 }}
  >
 <section className="w-[75%] mx-auto gap-3 flex flex-wrap justify-centet items-center ">
      <ProfileCard />
      <Portfolio  />
      <Qualification/>
      <SkillsText /> 
      <Profile/>
    </section>
  </motion.div>
   
  );
}
