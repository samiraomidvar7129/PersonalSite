import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import ContactList from "../contactList";
import Form from "../form";

const ContactForm = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-[90%] lg:w-[75%] mx-auto mt-16" >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ContactList/>
        <Form/>
      </div>
      <ToastContainer />
    </motion.div>
  );
};
export default ContactForm;
