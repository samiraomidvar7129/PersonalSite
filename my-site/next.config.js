/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    i18n: {
      locales: ['fa', 'en'],  
      defaultLocale: 'fa',    //  Default language
      localeDetection: false
    },
  }
  
  module.exports = nextConfig;
  