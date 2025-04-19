'use client';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
 
const WhyMe=()=>{
    const translate = useTranslations(); // Using useTranslations to access messages
    return(
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col   gap-8">
        <div >
          <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4  ">
          {translate('how is')} 
          </h2>
          <div className="p-4">
            <p className="text-sm sm:text-base leading-relaxed text-[#9e9e9e] text-justify">
            {translate('aboutDesc')} 
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4 ">
          {translate('Why me')} 
          </h2>
          <ul
            className="list-disc pl-6 text-[#9e9e9e] text-sm sm:text-base pr-6"
            role="list">
            <li role="listitem">
            {translate('Modern Web')} 
            </li>
            <li role="listitem">{translate('Responsive')} </li>
            <li role="listitem">
            {translate('ProblemSolving')}
            </li>
            <li role="listitem">{translate('learning')}</li>
          </ul>
        </div>
      </motion.div>
    )};
export default WhyMe;