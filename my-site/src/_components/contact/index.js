import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "../contactForm";
const ContactComp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className=" py-5 flex flex-col justify-center items-start">
        <div className=" px-5 ">
          <div className=" mt5">
            <h6 className="font-bold">Contact Info</h6>
          </div>
          <div className="my-4">
            <p className="text-sm ">
              If you have a project in mind, please complete the form below to
              send your enquiry.
            </p>
          </div>
          <ContactForm />
          <div className=" mt-8 flex justify-center items-start grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="my-[10px]">
              <h4 className="py-3 ont-bold text-yellow-700">Contact</h4>
              <p className="fw-bold py-2 text-xs"> somdr0889@gmail.com</p>
              <p className="fw-bold py-2 text-xs">09339610841</p>
            </div>
            <div className="my-[10px]">
              <h4 className="py-3 ont-bold text-yellow-700">Follow </h4>
               <div className="flex flex-col justify-center itens-center py-3">
               <Link href="" className="py-1 text-xs">Instagram</Link>
               <Link href="" className="py-2 text-xs" >Telegram</Link>
               </div>
            </div>
            <div className="my-[10px]">
              <h4 className="py-3 ont-bold text-yellow-700">Address</h4>
              <p className="py-3 text-xs">Razavi Khorasan, Mashhad, 81 Resalat St</p>
            </div>
          </div>
          <div />
        </div>
      </div>
    </motion.div>
  );
};
export default ContactComp;
