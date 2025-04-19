import Portfolio from "@/_components/portfolio";
import Profile from "@/_components/profile";
import ProfileCard from "@/_components/profileCard";
import Qualification from "@/_components/qualification";
import SkillsText from "@/_components/skillsText";
export default function Home() {

  return (
      <section className="w-[90%] sm:w-[85%] lg:w-[75%] place-items-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <Portfolio />
        <Qualification />
        <SkillsText />
        <Profile />
      </section>
    
  )};