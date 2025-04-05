import React from 'react';
import { motion } from "framer-motion";
import ContactForm from '../contactForm';
const ContactComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div className=" py-5 flex flex-col justify-center items-start">
          <div className=" px-5 ">
            <div className=" mt5">
              <h6>Contact Info</h6>
            </div>
            <div className="my-[10px]">
              <p >
              I would like to chat. why donot you call me  </p>
            </div>
            <div  className='my-[10px'>
              <p className="fw-bold">09339610841 -- somdr0889@gmail.com</p>
            </div>
            <div className='my-[10px]'>
              <p>Razavi Khorasan, Mashhad, 81 Resalat St</p>
            </div>
            <div />
          </div>
          <div >
            <div className="mt-5">
              <div className=" px-5 ">
                <div>
                <h6>Have Question?</h6>
                </div>
              </div>
                <ContactForm/>
            </div>
          </div>
        </div>
      </motion.div>
    )
}
export default ContactComp;