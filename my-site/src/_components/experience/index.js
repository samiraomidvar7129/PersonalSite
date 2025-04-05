import React from 'react';
import { motion } from "framer-motion";
import Skils from '../skills';
const ExperienceComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div>
     <div className="py-5 flex flex-col justify-center items-start">
       <div className=" px-5 ">
         <div className="mt-5">
           <h6 className='font-bold'> Education</h6>
         </div>
         <div className="mt-8">
           <p className="text-sm leading-[32px] ">
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
       <div className="mt-3 pl-4">
         <div className="mt-5">
           <h6 className='font-bold'> Professional Skills</h6>
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