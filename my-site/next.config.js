/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    i18n: {
      locales: ['fa', 'en'],  // Suport Languages
      defaultLocale: 'fa',    //  Default Language
      localeDetection: false // Prevent the user's browser from automatically selecting a language
    },
  }
  
  module.exports = nextConfig;
  