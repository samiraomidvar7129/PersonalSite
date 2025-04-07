'use client';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'وب‌سایت رستوران',
    description: 'طراحی و پیاده‌سازی وب‌سایت رستوران با استفاده از JavaScript خالص و HTML/CSS.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/samiraomidvar7129/Tarkhineh-Restaurant',
    image: '/imgs/projects-img/tarkhineh.png',
  },
  {
    title: 'پروژه شرکتی PWA',
    description: 'اپلیکیشن تحت وب با React و قابلیت نصب به عنوان PWA برای استفاده آفلاین.',
    tech: ['React', 'PWA', 'Service Workers'],
    github: 'https://github.com/samiraomidvar7129/Consua-corporate-project',
    image: '/imgs/projects-img/consua.png',
  },
  {
    title: 'سیستم مدیریت هتل آریا',
    description: 'پروژه پیچیده برای مدیریت کامل عملیات یک هتل با React و معماری ماژولار.',
    tech: ['React', 'SPA', 'Routing'],
    github: 'https://github.com/samiraomidvar7129/Aria-Hotel',
    image: '/imgs/projects-img/aria-hotel.png',
  },
  {
    title: 'وب‌سایت شخصی من',
    description: 'وب‌سایت شخصی برای معرفی مهارت‌ها و نمونه‌کارها، توسعه‌یافته با Next.js.',
    tech: ['Next.js', 'Tailwind', 'SEO'],
    github: 'https://github.com/samiraomidvar7129/PersonalSite',
    image: '/imgs/projects-img/portfolio.png',
  },
  {
    title: 'Doctor Online',
    description: 'سیستم رزرو نوبت اینترنتی پزشکان با JavaScript و پیاده‌سازی فرم‌های هوشمند.',
    tech: ['JavaScript', 'LocalStorage', 'Form Validation'],
    github: 'https://github.com/samiraomidvar7129/Online-Doctor',
    image: '/imgs/projects-img/doctor-img.png',
  },
];

const Projects = () => {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">نمونه‌کارها</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
            <Image
            width={200}
            height={100}
            priority={true}
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#111827]">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaGithub size={20} />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-black">
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
