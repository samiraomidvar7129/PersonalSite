import { motion } from "framer-motion";
import { VscFileCode, VscDiffSingle } from "react-icons/vsc";
import { MdDeveloperMode } from "react-icons/md";
import { GrOptimize } from "react-icons/gr";

const services = [
  {
    icon: <VscFileCode />,
    title: "Web Development",
    description:
      "Design and development of modern and responsive websites using the latest technologies. ● Create unparalleled user experiences and optimize performance.",
  },
  {
    icon: <GrOptimize />,
    title: "Performance Optimization",
    description:
      "Increase speed and improve your website's performance. Optimize images, code, and resources to provide a fast and smooth user experience.",
  },
  {
    icon: <VscDiffSingle />,
    title: "Single-Page Applications",
    description:
      "Develop fast and dynamic web applications using modern frameworks such as React, Next.js, providing an optimal and attractive user experience.",
  },
  {
    icon: <MdDeveloperMode />,
    title: "Responsive Development",
    description:
      "Designing websites that automatically adapt to different screen sizes. Providing a seamless user experience across all devices.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col justify-center items-start px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-8"
      >
        <h6 className="text-lg font-bold text-white">My Services</h6>
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
            className="group border border-slate-700 rounded-xl p-5 flex flex-col justify-center items-center text-center bg-[#1c1c1c] hover:shadow-2xl transition-all cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl text-slate-600 mb-3"
            >
              {service.icon}
            </motion.div>

            <h4 className="text-white text-base font-semibold mb-2 group-hover:text-slate-500 transition-colors duration-300">
              {service.title}
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;