import "./globals.css";
import { yekan, inter } from "@/config/font";
import Navbar from "@/_components/navbar";

export const metadata = {
  title: "Samira-Omidvar ",
  description:
    "frontend developer,programming,programmer,FrontEnd,برنامه نویس فرانت  اند ,توسعه دهنده فرانت اند ,توسعه دهنده,برنامه نویس,فرانت اند ",
  keywords:
    "samira omidvar,samira,frontend devaloper,developer,programmer,SamiraOmidvar,سمیرا میدوار,فرانت اند دولوپر ",
  robots: "index,follow",
};

export default function RootLayout({ children  }) {
  const variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
<html
    lang="en"
      className={`${inter.variable} ${yekan.variable} antialiased`}>
      <body  className="bg-[#0f0f0f] ">
        <header className=" container mx-auto text-white">
          <Navbar />
        </header>
        <main className=" container mx-auto py-8 ">{children}</main>
      </body>
    </html>
  );
}
