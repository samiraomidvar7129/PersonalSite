import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { MdOutlineMarkEmailRead, MdOutlinePhoneIphone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";

const schema = yup.object().shape({
  fullName: yup.string().required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .length(11, "Must be 11 digits"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message cannot be empty"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: data.fullName,
          body: data.message,
          email: data.email,
          phone: data.phone,
          userId: 1,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully 🚀", {
          position: "top-left",
          autoClose: 3000,
        });
        reset();
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("Server error. Try again later.", {
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-[90%] lg:w-[75%] mx-auto mt-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          <h3 className="text-3xl font-bold text-white">Contact Me</h3>

          <div className="flex items-start gap-4">
            <div className="bg-[#1b1b1b] w-16 h-16 rounded-xl flex justify-center items-center text-white">
              <MdOutlineMarkEmailRead className="text-3xl" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Email</div>
              <p className="text-xs text-white mt-2">yasaminomid9643@gmail.com</p>
              <p className="text-xs text-white">somdr0889@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#1b1b1b] w-16 h-16 rounded-xl flex justify-center items-center text-white">
              <MdOutlinePhoneIphone className="text-3xl" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Phone</div>
              <p className="text-xs text-white mt-2">09339610841 — 09302177630</p>
              <p className="text-xs text-white">0513-274-2034</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[#1b1b1b] w-16 h-16 rounded-xl flex justify-center items-center text-white">
              <IoLocationOutline className="text-3xl" />
            </div>
            <div>
              <div className="text-white text-sm font-semibold">Location</div>
              <p className="text-xs text-white mt-2">Iran — KhorasanRazavi — Mashhad</p>
              <p className="text-xs text-white">BLV — Mofatteh</p>
            </div>
          </div>
        </div>

        <section className="bg-[#1b1b1b] rounded-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} action="/api/contact" method="POST" className="flex flex-col gap-4">
            <div>
              <input
                {...register("fullName")}
                placeholder="Your Name"
                className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none"
              />
              {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <input
                {...register("phone")}
                placeholder="Your Phone Number"
                className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none"
              />
              {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Your Email"
                className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none"
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                {...register("message")}
                placeholder="Your Message"
                rows="5"
                className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none resize-none"
              ></textarea>
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-zinc-300 text-zinc-900 text-sm py-3 px-6 rounded mt-2 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <FiSend className="text-base" /> Send Message
            </button>
          </form>
        </section>
      </div>
      <ToastContainer />
    </motion.div>
  );
};
export default ContactForm;