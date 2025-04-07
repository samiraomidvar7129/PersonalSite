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
      <section className="w-[90%] sm:w-[85%] lg:w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <Portfolio />
        <Qualification />
        <SkillsText />
        <Profile />
      </section>
    </motion.div>
  );
}
