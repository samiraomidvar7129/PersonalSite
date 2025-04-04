import "./globals.css";
import { yekan,inter } from "@/config/font";

export const metadata = {
  title: "Samira-Omidvar ",
  description:
  "frontend developer,programming,programmer,FrontEnd,برنامه نویس فرانت  اند ,توسعه دهنده فرانت اند ,توسعه دهنده,برنامه نویس,فرانت اند ",
    keywords:"samira omidvar,samira,frontend devaloper,developer,programmer,SamiraOmidvar",
    robots:"index,follow"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${yekan.variable} antialiased`}> 
      <body>
        {children}
      </body>
    </html>
  );
}
