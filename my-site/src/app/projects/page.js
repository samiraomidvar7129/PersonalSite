"use client";
import React from "react";
import { useEffect,useState } from "react";
import '../globals.css';
import { motion } from "framer-motion";
import Projects from "@/_components/projects";


const  ProjectsPage= () => {
    // const [repos, setRepos] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const fetchRepos = async () => {
    //     try {
    //         const response = await fetch('/api/fetchProjects'); // به API خودتان درخواست بزنید
    //         if (!response.ok) {
    //             throw new Error('پاسخ شبکه خوب نبود');
    //         }
    //         const data = await response.json();
    //         setRepos(data);
    //     } catch (error) {
    //         setError(error);
    //         console.error('Error fetching projects:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchRepos()
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error fetching repos: {error.message}</div>;
    // }



    return (
      <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
      {/* <div className=" projects-wrapper py-5 d-flex flex-column justify-content-center align-items-start">
          <div className="projects-wrapper__inner px-5 ">
          <div className="projects-wrapper__inner--title mt-5">
              <h2> Portfolio</h2>
            </div>
            <div className="projects-wrapper__inner--txt mt-5">
              <h6>Who I Am</h6>
            </div>
            <div  className="projects-wrapper__inner--mute mt-4">
              <p className="projects-wrapper__inner--mute-txt">
                Praesent ut tortor consectetur, semper sapien non, lacinia augue.
                Aenean arcu libe ro, facilisis et nisi non, tempus faucibus tortor.
                Mauris vel nulla aliquam, pell entesque enim ac, faucibus tortor.
                Nulla odio nibh, cursus sit amet urna id, digni ssim ilimAenean arcu
                libe ro, facilisis et nisi non, tempus faucibus tortor.
              </p>
            </div>
            <div />
          </div>
          <div className="projects-wrapper__inner px-5 mt-5 " >
            <h4>My Projects</h4>
            <section className="container-fluid py-5 d-flex flex-wrap  justify-content-center align-items-center">
          <div className="row">
          {repos.map(repo => (
                   <div key={repo.id} className="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 p-2 ">
                   <div className="mx-1 p-3 border border-5 w-100 h-100">
                   <a href={repo.html_url} target="_blank" className="projects-wrapper__inner--name"  rel="noopener noreferrer">
                         {repo.name}
                     </a>
                     <div className="projects-wrapper__inner--desc mt-3">{repo.description}</div>
                   </div>
                 </div>   
                ))}
          </div>
            </section>
        </div>
        </div> */}
        <Projects/>
        </motion.div>
      
    );
};

export default ProjectsPage;


