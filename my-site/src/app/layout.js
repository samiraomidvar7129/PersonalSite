// import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { yekan,inter } from "@/config/font";
import Sidebar from "@/_components/sidebar";
import Profile from "@/_components/profile";


export const metadata = {
  title: "Samira-Omidvar ",
  description:
  "frontend developer,programming,programmer,FrontEnd,برنامه نویس فرانت  اند ,توسعه دهنده فرانت اند ,توسعه دهنده,برنامه نویس,فرانت اند ",
    keywords:"samira omidvar,samira,frontend devaloper,developer,programmer,SamiraOmidvar",
    robots:"index,follow"
};

export default function RootLayout({ children }) {
  const variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <html lang="en" className={`${inter.variable} ${yekan.variable} antialiased`}> 
      <body>
      <main className="flex justify-center items-center min-h-screen">
      <div className="w-[10%]"><Sidebar/></div>
      <main className=" main-wrapper w-[60%] vh-100 ">{children}</main>
      <div  className="w-[30%]"><Profile/></div>
      </main>
      </body>
    </html>
  );
}
