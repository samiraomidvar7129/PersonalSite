"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "restaurantTarkhineh",
    description:"restaurantDesc",
    tech: ["JavaScript", "Ajax", "SASS", "Bootstrap" ,"Swiper.js"],
    github: "https://github.com/samiraomidvar7129/Tarkhineh-Restaurant",
    image: "/imgs/projects-img/tarkhineh.png",
  },
  {
    title: "corporateProject",
    description:"CorporateDesc",
    tech: ["React", "PWA", "Service Workers"],
    github: "https://github.com/samiraomidvar7129/Consua-corporate-project",
    image: "/imgs/projects-img/consua.png",
  },
  {
    title: "ariaHotel",
    description:"ariaDesc",
    tech: ["React", "Redux", "Express.js","Framer-Motion","React-Hook-Form","Yup"],
    github: "https://github.com/samiraomidvar7129/Aria-Hotel",
    image: "/imgs/projects-img/aria-hotel.png",
  },
  {
    title: "personalWebsite",
    description:"personalDesc",
    tech: ["Next.js", "Next-intl", "Axios", "Tailwind","Framer-Motion","React-Hook-Form","Yup"],
    github: "https://github.com/samiraomidvar7129/PersonalSite",
    image: "/imgs/projects-img/portfolio.png",
  },
  {
    title: "doctorOnline",
    description:"doctorDesc",
    tech: ["JavaScript", "LocalStorage", "Axios" , "Swiper.js", "Bootstrap" ,"sweetalert"],
    github: "https://github.com/samiraomidvar7129/Online-Doctor",
    image: "/imgs/projects-img/doctor-img.png",
  },
];

const Projects = () => {
  const translate = useTranslations(); // Using useTranslations to access messages

  return (
    <section className=" py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        {translate("myProjects")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1b1b1b] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Image
              src={project.image}
              width={400}
              height={200}
              alt={`Project image: ${project.title}`}
              className="rounded-xl mb-4 w-full h-48 object-cover"
              aria-label="projectImage"
              loading="lazy"/>
            <h3 className="text-xl font-semibold mb-2 text-white">
            {translate(project.title)} 
            </h3>
            <p className="text-gray-400 text-sm mb-3 leading-[32px]">
            {translate(project.description)} 
            </p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-gray-600 mt-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label={`GitHub repository for ${project.title}`}>
                <FaGithub size={20} aria-label="githubLink" />
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label={`Live preview for ${project.title}`}>
                <FaExternalLinkAlt size={18} aria-label="linkedinLink" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
