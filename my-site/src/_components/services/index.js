import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { VscFileCode, VscDiffSingle } from "react-icons/vsc";
import { MdDeveloperMode } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";

const services = [
  {
    icon: <VscFileCode />,
    title: "webDevelopment",
    description:"webDevelopmentDesc"  },
  {
    icon: <GrOptimize />,
    title: "performanceOptimization",
    description:"performanceDesc"
    },
  {
    icon: <VscDiffSingle />,
    title: "singlePage",
    description:"singlePageDesc" 
   },
  {
    icon: <MdDeveloperMode />,
    title: "responsiveDevelopment",
    description:"responsiveDesc"
    },
];

const Services = () => {
  const translate = useTranslations(); // Using useTranslations to access messages
  return (
    <div className="flex flex-col justify-center items-start px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-8">
        <h6 className="text-lg font-bold text-white">
          {translate("myServices")}
        </h6>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="group border border-slate-700 rounded-xl p-5 flex flex-col
             justify-center items-center text-center bg-[#1c1c1c]
             hover:shadow-2xl transition-all cursor-pointer" >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl text-slate-600 mb-3">
              {service.icon}
            </motion.div>
            <h4 className="text-white text-base font-semibold
             mb-2 group-hover:text-slate-500 transition-colors
              duration-300">
              {translate(service.title)} 
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
            {translate(service.description)} 
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )};
export default Services;