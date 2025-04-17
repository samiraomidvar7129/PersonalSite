"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";

// Schema for validationForm
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

const Form = () => {
  const translate = useTranslations(); // Using useTranslations to access messages

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  // Submit Function
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: data.fullName,
            body: data.message,
            email: data.email,
            phone: data.phone,
            userId: 1,
          }),
        }
      );

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
    <section className="bg-[#1b1b1b] rounded-xl p-6 sm:p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        role="form"
        action="/api/contact"
        method="POST"
        className="flex flex-col gap-4"
      >
        <div>
          <input
            type="text"
            {...register("fullName")}
            placeholder="Your Name"
            className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none"
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="number"
            {...register("phone")}
            placeholder="Your Phone Number"
            className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none"
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            {...register("email")}
            placeholder="Your Email"
            className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none"
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")}
            placeholder="Your Message"
            rows="5"
            className="bg-[#212121] w-full text-xs text-zinc-300 py-3 px-4 rounded outline-none resize-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <button
          aria-label="submit"
          type="submit"
          className="bg-white hover:bg-zinc-300 text-zinc-900 text-sm py-3 px-6 rounded mt-2 transition-all duration-300 flex items-center gap-2 justify-center"
        >
          <FiSend className="text-base" aria-hidden="true" />{" "}
          {translate("SendMessage")}
        </button>
      </form>
    </section>
  );
};
export default Form;