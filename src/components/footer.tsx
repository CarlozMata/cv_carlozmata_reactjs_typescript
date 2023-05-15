import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/footer.scss";

const FooterComponent = () => {
  //Esto es mi cambio de Idioma
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);
  const [year] = useState<number>(new Date().getFullYear());

  return (
    <>
      <div className="footer">
        <div className="div-footer">
          <div className="footer-left">
            <a href="https://carlozmata.com/" target="__blank">
              -CARLOZMATA-
            </a>
            {/*             <a href="https://carlozmata.com/" target="__blank">
              {t("footer.name")}
              {year}
            </a> */}
          </div>
          <div className="footer-right">
            <a href="https://github.com/CarlozMata" target="__blank">
              {t("footer.github")}
            </a>
            <a
              href="https://www.linkedin.com/in/carlosalbertolopezmata/"
              target="__blank"
            >
              {t("footer.linkedln")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterComponent;
