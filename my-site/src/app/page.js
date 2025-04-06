import Portfolio from '@/_components/portfolio';
import Profile from '@/_components/profile';
import ProfileCard from '@/_components/profileCard';
import Qualification from '@/_components/qualification';
import SkillsText from '@/_components/skillsText';
export default function Home() {
return(
 <section className='w-[75%] mx-auto gap-3 flex flex-wrap justify-center items-center'>
<SkillsText/>
<ProfileCard/>
<Portfolio/>
<Qualification/>
<Profile/>
<Portfolio/>
<Profile/>
<Qualification/>
 </section>
)}