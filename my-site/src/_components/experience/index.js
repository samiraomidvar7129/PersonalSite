import React from 'react';
import { motion } from "framer-motion";
import Skils from '../skills';
const ExperienceComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div>
     <div className=" Experience-wrapper py-5 d-flex flex-column justify-content-center align-items-start">
       <div className="about-wrapper__inner px-5 ">
         <div className="about-wrapper__inner--title mt-5">
           <h2> Experience</h2>
         </div>
         <div className="about-wrapper__inner--txt mt-5">
           <h6> Education</h6>
         </div>
         <div className="about-wrapper__inner--mute mt-4">
           <p className="about-wrapper__inner--mute-txt">
             Praesent ut tortor consectetur, semper sapien non, lacinia augue.
             Aenean arcu libe ro, facilisis et nisi non, tempus faucibus
             tortor. Mauris vel nulla aliquam, pell entesque enim ac, faucibus
             tortor. Nulla odio nibh, cursus sit amet urna id, digni ssim
             ilimAenean arcu libe ro, facilisis et nisi non, tempus faucibus
             tortor.
           </p>
         </div>
         <div />
       </div>
       <div className="about-wrapper__inner px-5 mt-3 ">
         <div className="about-wrapper__inner--title mt-5">
           <h6> Professional Skills</h6>
         </div>
         <div className="about-wrapper__inner--content  mt-4">
           <Skils />
         </div>
       </div>
     </div>
   </div>
   </motion.div>
    )
}
export default ExperienceComp;