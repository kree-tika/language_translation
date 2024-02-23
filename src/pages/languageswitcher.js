import { useTranslation } from "next-i18next";
import React from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lang) => {
    console.log("Attempting to change language to:", lang);
    try {
      await i18n.changeLanguage(lang);
      console.log("Language changed successfully to:", i18n.language);
    } catch (error) {
      console.error("Error while changing language:", error);
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <h2>Language Switcher</h2>
      <select onChange={handleLanguageChange} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="jp">Japanese</option>
        <option value="kr">Korean</option>
        {/* Add more options for other supported languages */}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
