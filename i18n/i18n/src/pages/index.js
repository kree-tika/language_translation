// pages/index.js
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitcher from "./languageswitcher";

const Home = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("HELLO_WORLD")}</h1>
      <LanguageSwitcher />
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
