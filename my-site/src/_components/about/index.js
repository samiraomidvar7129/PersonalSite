import React from 'react';
import { motion } from "framer-motion";
import ProjectsList from '../projects';
import Services from '../services';
const AboutComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div className=" about-wrapper py-5 d-flex flex-column justify-content-center align-items-start">
            <div className="about-wrapper__inner px-5 ">
            <div className="about-wrapper__inner--title mt-5">
                <h2>About Me</h2>
              </div>
              <div className="about-wrapper__inner--txt mt-5">
                <h6>Who I Am</h6>
              </div>
              <div  className="about-wrapper__inner--mute mt-4">
                <p className="about-wrapper__inner--mute-txt">
                  Praesent ut tortor consectetur, semper sapien non, lacinia augue.
                  Aenean arcu libe ro, facilisis et nisi non, tempus faucibus tortor.
                  Mauris vel nulla aliquam, pell entesque enim ac, faucibus tortor.
                  Nulla odio nibh, cursus sit amet urna id, digni ssim ilimAenean arcu
                  libe ro, facilisis et nisi non, tempus faucibus tortor.
                </p>
              </div>
              <div />
            </div>
           <div className="about-wrapper__inner px-5 mt-5 w-100">
            <ProjectsList/>
           </div>
           <div className="about-wrapper__inner px-5 mt-5 w-100">
            <Services/>
           </div>
          </div>
          </motion.div>
    )
}
export default AboutComp;