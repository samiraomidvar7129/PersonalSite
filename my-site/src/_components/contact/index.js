import React from 'react';
import { motion } from "framer-motion";
import ContactForm from '../contactForm';
const ContactComp=()=>{
    return(
        <motion.div initial={{ opacity: 0 }} transition= { {duration: 1} } animate={{ opacity: 1 } } >
        <div className=" contact-wrapper  py-5 d-flex flex-column justify-content-center align-items-start">
          <div className="contact-wrapper__inner px-5 ">
            <div className="contact-wrapper__inner--title mt-5">
              <h2>Contact Me</h2>
            </div>
            <div className="contact-wrapper__inner--txt mt-5">
              <h6>Contact Info</h6>
            </div>
            <div className="contact-wrapper__inner--mute mt-4">
              <p className="contact-wrapper__inner--mute-txt">
              I would like to chat. why don't you call me  </p>
            </div>
            <div className="contact-wrapper__inner--mute-email">
              <p className="fw-bold">09339610841 somdr0889@gmail.com</p>
            </div>
            <div className="contact-wrapper__inner--mute-address">
              <p>Razavi Khorasan, Mashhad, 81 Resalat St</p>
            </div>
            <div />
          </div>
          <div className="contact-wrapper__inner w-100">
            <div className="mt-5">
              <div className=" px-5 ">
                <div>
                <h6>Have Question?</h6>
                </div>
              </div>
              <div className=" px-5 mt-5 w-100 ">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
}
export default ContactComp;