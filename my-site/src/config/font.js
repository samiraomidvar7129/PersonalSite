import localfont from "next/font/local";
import {Inter} from "next/font/google"

export const yekan=localfont({
  src:[
    {
      path:"../../public/fonts/Yekan.ttf",
      style:"normal",
      weight:"200"
    }
  ],
  display:"swap",
  variable:"--font-local-yekan",
})

export const inter=Inter({
  display:"swap",
  variable:"--font-google-inter",
  subsets:["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
  style:"normal"
})