import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";



// Definition of Validation Method

const schema = yup.object().shape({
  fullName: yup.string().required("Name required"),
  phone: yup
    .string()
    .required("A contact number is required")
    .matches(/^[0-9]+$/, "Only the number is valid")
    .length(11, "The contact number should be 11 digits"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  message: yup.string().required("The message is obligatory"),
});

const ContactForm = () => {
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
      const response = await fetch(
        data,
        "https://jsonplaceholder.typicode.com/posts",
        {
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
        }
      );
      if (response.ok) {
        toast.success("gfgfgf", {
          position: "top-left",
          autoClose: 3000,
        });
        reset(); // بازنشانی فرم پس از ارسال موفق
      } else {
        toast.error("خطا در ارسال پیام. لطفا دوباره تلاش کنید.", {
          position: "top-left",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("خطا در برقراری ارتباط. لطفا دوباره تلاش کنید.", {
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className=" mx-auto mt-8 ml-5 flex flex-wrap justify-center items-center gap-7">
      <div className="h-full flex flex-col justify-start items-cener ">
        <div>
          <h3 className="text-lg text-white">Contact</h3>
        </div>
        <div className="flex justify-end items-start gap-2 my-8">
          <div className="bg-[#1b1b1b] w-[80px] h-full p-2 rounded-xl text-white flex justify-center items-center"><MdOutlineMarkEmailRead className="text-3xl"/></div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm ">Mail</div>
           <div className="pt-2">
            <p className="text-white text-xs pt-2">yasaminomid9643@gmail.com</p>
            <p className="text-white text-xs pt-2">somdr0889@gmail.com</p>
           </div>
          </div>
        </div>
         <div className="flex justify-end items-start gap-2 my-8">
          <div className="bg-[#1b1b1b] w-[73px] h-full p-2 rounded-xl text-white flex justify-center items-center"><MdOutlinePhoneIphone className="text-3xl"/></div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm ">Location</div>
           <div className="pt-2">
            <p className="text-white text-xs pt-2">09339610841 -- 09302177630</p>
            <p className="text-white text-xs pt-2">0513-274-2034</p>
           </div>
          </div>
        </div>
        <div className="flex justify-end items-start gap-2 my-8">
          <div className="bg-[#1b1b1b] w-[76px] h-full p-2 rounded-xl text-white flex justify-center items-center"><IoLocationOutline className="text-3xl"/></div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-white text-sm ">Location</div>
           <div className="pt-2">
            <p className="text-white text-xs pt-2">Iran --- Khorasan --- Mashhad</p>
            <p className="text-white text-xs pt-2">BLV --- Mofatteh</p>
           </div>
          </div>
        </div>
      </div>
      <section className="w-[50%] bg-[#1b1b1b] p-4 rounded-xl ">
      <form
        className=" flex flex-col justify-center items-start "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full mt-3 flex flex-col">
          <input
            className="bg-[#212121] text-zinc-300 text-xs outline-none rounded py-3 pl-3"
            {...register("fullName")}
            placeholder="Your Name"
          />
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">
            {errors.fullName?.message}
          </p>
        </div>
        <div className="w-full mt-3 flex flex-col">
          <input
            className="bg-[#212121] text-zinc-300 text-xs outline-none rounded py-3 pl-3 "
            {...register("phone")}
            placeholder="Your Number"
          />
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">
            {errors.phone?.message}
          </p>
        </div>
        <div className="w-full mt-3 flex flex-col">
          <input
            className="bg-[#212121] text-zinc-300 text-xs outline-none rounded py-3 pl-3 "
            {...register("email")}
            placeholder="Your Email"
          />
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">
            {errors.email?.message}
          </p>
        </div>
        <div className=" w-full mt-3 flex flex-col">
          <textarea
            rows="8"
            placeholder="Please describe your business"
            className="block resize-none bg-[#212121] text-zinc-300 text-xs outline-none rounded py-3 pl-3"
            {...register("message")} // Add a register for the textarea
          ></textarea>
          <p className="text-red-600 text-xs mt-2 flex justify-start items-end">
            {errors.message?.message}
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="block w-full cursor-pointer size-full p-3 rounded bg-[#212121]  hover:bg-white hover:text-zinc-900 text-zinc-300 text-xs text-white mt-3"
          >
            Send Massage
          </button>
        </div>
      </form>
      </section>
      <ToastContainer /> {/* Adding ToastContainer to Show Toasts*/}
       <Image
                className="block w-full h-full  mt-8"
                src="/imgs/earth.png"
                alt="earth.png"
                width={100}
                height={100}
              />
    </div>
  );
};
export default ContactForm;
