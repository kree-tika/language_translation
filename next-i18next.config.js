const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "jp", "kr"], // Add all supported languages here
  },
  localePath: path.resolve("public/locales"),
};
