import {Inter} from "next/font/google";
import localFont from "next/font/local";

export const inter=Inter({
  display:"swap",
  variable:"--font-google-inter",
  subsets:["latin"],
  style:"normal"
})
export const yekan = localFont({
  src: [
    {
      path: '/fonts/Yekan.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-local-yekan',
  display: 'swap',
})

export const austyke = localFont({
  src: [
    {
      path: '/fonts/Austyke.ttf', 
      style: 'normal',
    },
  ],
  variable: '--font-local-austyke',
  display: 'swap',
})