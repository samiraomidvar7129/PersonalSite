'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Restaurant Tarkhineh',
    description: 'Designed and developed a restaurant website using plain JavaScript and HTML/CSS.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/samiraomidvar7129/Tarkhineh-Restaurant',
    image: '/imgs/projects-img/tarkhineh.png',
  },
  {
    title: 'Corporate PWA Project',
    description: 'A web application built with React and installable as a PWA for offline access.',
    tech: ['React', 'PWA', 'Service Workers'],
    github: 'https://github.com/samiraomidvar7129/Consua-corporate-project',
    image: '/imgs/projects-img/consua.png',
  },
  {
    title: 'Aria Hotel ',
    description: 'A complex hotel management system developed with modular React architecture.',
    tech: ['React', 'SPA', 'Routing'],
    github: 'https://github.com/samiraomidvar7129/Aria-Hotel',
    image: '/imgs/projects-img/aria-hotel.png',
  },
  {
    title: 'Personal Website',
    description: 'A personal portfolio website built with Next.js, featuring SEO optimization.',
    tech: ['Next.js', 'Tailwind', 'SEO'],
    github: 'https://github.com/samiraomidvar7129/PersonalSite',
    image: '/imgs/projects-img/portfolio.png',
  },
  {
    title: 'Doctor Online',
    description: 'An online appointment booking system for doctors using JavaScript and smart forms.',
    tech: ['JavaScript', 'LocalStorage', 'Form Validation'],
    github: 'https://github.com/samiraomidvar7129/Online-Doctor',
    image: '/imgs/projects-img/doctor-img.png',
  },
];

const Projects = () => {
  return (
    <section className=" py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1b1b1b] rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={project.image}
              width={400}
              height={200}
              alt={`Project image: ${project.title}`}
              className="rounded-xl mb-4 w-full h-48 object-cover"
              aria-label="projectImage"
              priority
            />
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium"
                >
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
                aria-label={`GitHub repository for ${project.title}`}
              >
                <FaGithub size={20} aria-label='githubLink' />
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition"
                aria-label={`Live preview for ${project.title}`}
              >
                <FaExternalLinkAlt size={18}  aria-label='linkedinLink'/>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;