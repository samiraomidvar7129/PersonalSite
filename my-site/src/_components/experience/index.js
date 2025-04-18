'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaBookOpen, FaLaptopCode } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import Services from '../services';

const educationSteps = [
  {
    title: 'SelfTaughtJourney',
    description: 'description1',
    icon: <FaBookOpen className="text-blue-400" size={20} />,
    year: 'Present',
  },
  {
    title: 'darsmanAcademy',
    description: 'darsmanDesc',
    icon: <PiStudentBold className="text-green-400" size={20} />,
    year: 'Present',
  },
];
const ExperienceComp = () => {
  const translate = useTranslations(); // Using useTranslations to access messages

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-[#1b1b1b] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <FaLaptopCode className="text-blue-300" /> {translate('MyLearningPath')} 
        </h2>
        <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
          {educationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative" >
              <div className="absolute -left-8 top-1 bg-slate-800 p-3 rounded-full shadow-md border border-blue-500">
                {step.icon}
              </div>
              <div className="bg-[#1b1b1b] rounded-xl shadow-lg p-6 md:p-8 border border-slate-700">
                <h3 className="text-white text-lg font-semibold mb-1">{translate(step.title)} </h3>
                <p className="text-gray-400 text-sm">{translate(step.description)} </p>
                <span className="text-xs text-gray-500 mt-2 block">{translate(step.year)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Services/>
    </motion.section>
  );
};

export default ExperienceComp;
