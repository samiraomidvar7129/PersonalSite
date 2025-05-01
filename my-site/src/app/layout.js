export const dynamic = 'force-dynamic'; // Dynumic Render

import { metadata } from "./metadata";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { getLocale , getMessages} from "next-intl/server";
import "./globals.css";
import {inter } from "@/config/font";
import { yekan } from "@/config/font";
import Navbar from "@/_components/navbar";

export default async function RootLayout({ children} ) {
  const locale = await getLocale();
  const messages = await getMessages();

  if (locale === null) {
    return <div>Loading...</div>;
  }

  const variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: { duration: 1 },
    }};

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'}   className={`${inter.variable} ${yekan.variable}`}>
      <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body  className="bg-[#0f0f0f]">
      <NextIntlClientProvider locale={locale} messages={messages}>
      <header className=" container mx-auto text-white">
          <Navbar />
        </header>
        <main className=" container mx-auto py-8 ">{children}</main>
      </NextIntlClientProvider>
      </body>
    </html>)}