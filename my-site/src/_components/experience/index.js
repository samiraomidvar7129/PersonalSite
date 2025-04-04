import React from 'react';
import { motion } from "framer-motion";
import Skils from '../skills';
const ExperienceComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div>
     <div className="py-5 flex flex-col justify-center items-start">
       <div className=" px-5 ">
         <div className=" mt-5">
           <h2> Experience</h2>
         </div>
         <div className="mt-5">
           <h6> Education</h6>
         </div>
         <div className="mt-4">
           <p className="text-md leading-[1%]">
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
       <div className="mt-3 ">
         <div className="mt-5">
           <h6> Professional Skills</h6>
         </div>
         <div className="mt-4">
           <Skils />
         </div>
       </div>
     </div>
   </div>
   </motion.div>
    )
}
export default ExperienceComp;