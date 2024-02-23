import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { locale, locales, push } = useRouter();

  const { t: translate } = useTranslation("common");

  const handleClick = (l) => () => {
    push(`/`, undefined, { locale: l });
  };

  return (
    <>
      <h1>Locale: {locale}</h1>

      <h2>{translate("HELLO_WORLD")}</h2>
      <div>
        <h3>Choose your locale: </h3>

        {locales.map((l) => (
          <button key={l} onClick={handleClick(l)}>
            {l}
          </button>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
