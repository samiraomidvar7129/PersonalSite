import "react-toastify/dist/ReactToastify.css"
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Definition of Validation Method

const schema = yup.object().shape({
  fullName: yup.string().required("Name required"),
  phone: yup
  .string()
  .required("A contact number is required")
  .matches(/^[0-9]+$/, "Only the number is valid")
  .length(11, "The contact number should be 11 digits"),
  email: yup
    .string()
    .email("Email is not valid")
    .required("Email is required"),
  message: yup.string().required("The message is obligatory"),
});

const ContactForm=() =>{

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Show Alert from Toastify

  const onSubmit = async (data) => {
    console.log(data);
    try {
        const response = await fetch(data,"https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: data.fullName,
                body: data.message,
                email: data.email,
                phone: data.phone, 
                userId: 1, 
            }),
        });
        if (response.ok) {
         toast.success("gfgfgf",{
          position:"top-left",
          autoClose:3000,
         });
            reset(); // بازنشانی فرم پس از ارسال موفق
        } else {
            toast.error("خطا در ارسال پیام. لطفا دوباره تلاش کنید.", {
              position:"top-left",
              autoClose: 3000,
            });
        }
    } catch (error) {
        toast.error("خطا در برقراری ارتباط. لطفا دوباره تلاش کنید.", {
          position:"top-left",
            autoClose: 3000,
        });
    }
};


  return (
    <div className="w-[500px] mx-auto mt-5 ml-5">
      <form
        className="size-full flex flex-col justify-center items-start "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mt-3 flex flex-col">
          <input
            className="border border-1 border-yellow-700 text-zinc-500 text-xs outline-yellow-800 rounded py-3 pl-3 size-full text-xs "
            {...register("fullName")}
            placeholder="Your Name"
          />
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">
            {errors.fullName?.message}
          </p>
        </div>
        <div className="w-full mt-3 flex flex-col">
          <input
            className="border border-1 border-yellow-700 text-xs text-zinc-500 outline-yellow-800 rounded py-3 pl-3 w-full text-xs "
            {...register("phone")}
            placeholder="Your Number"
          />
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">{errors.phone?.message}</p>
        </div>
        <div className="w-full mt-3 flex flex-col">
          <input
            className="border border-1 border-yellow-700 text-xs outline-yellow-800 text-zinc-500 rounded py-3 pl-3 w-full  "
            {...register("email")}
            placeholder="Your Email"
          />
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">{errors.email?.message}</p>
        </div>
        <div className=" w-full mt-3 flex flex-col">
          <textarea
            rows="8"
            placeholder="Please describe your business"
            className="block resize-none rounded pl-3 py-3 text-xs outline-yellow-800 border border-1 border-yellow-700 text-xs text-zinc-500 w-full"
            {...register("message")} // Add a register for the textarea
          ></textarea>
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">{errors.message?.message}</p>
        </div>
        <div>
          <button
            type="submit"
            className="block cursor-pointer size-full p-3 rounded bg-yellow-700 text-xs text-white mt-3">Send Massage</button>
        </div>
      </form>
      <ToastContainer /> {/* Adding ToastContainer to Show Toasts*/}
    </div>
  );
}
export default ContactForm;