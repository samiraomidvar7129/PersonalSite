const { notFound } = require('next/navigation');
const { getRequestConfig } = require('next-intl/server');

// Can be imported from a shared config
const locales = ['en', 'fa'];

module.exports = getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).then((module) => module.default)
  };
});
