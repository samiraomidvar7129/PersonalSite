import React from 'react';
import { motion } from "framer-motion";
import ProjectsList from '../projects';
import Services from '../services';
const AboutComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div className="  py-5 flex flex-col justify-center items-start">
            <div className="px-5 ">
              <div className="mt-5">
                <h6 className='font-bold'>Who I Am</h6>
              </div>
              <div  className=" mt-4">
                <p className="text-sm leading-[32px] ">
                  Praesent ut tortor consectetur, semper sapien non, lacinia augue.
                  Aenean arcu libe ro, facilisis et nisi non, tempus faucibus tortor.
                  Mauris vel nulla aliquam, pell entesque enim ac, faucibus tortor.
                  Nulla odio nibh, cursus sit amet urna id, digni ssim ilimAenean arcu
                  libe ro, facilisis et nisi non, tempus faucibus tortor.
                </p>
              </div>
              <div />
            </div>
            <ProjectsList/>
            <Services/>
          </div>
          </motion.div>
    )
}
export default AboutComp;