import { Card } from "antd";
import React, { useEffect } from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/portfolio.scss";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import imagenes from "../styles/img/imagenes";

const contentStyle: React.CSSProperties = {
  height: "320px",
  width: "90%",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const PortfolioComponent = () => {
  //Esto es mi cambio de Idioma
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <>
      <main>
        <Card
          title={t("portfolio.title")}
          className="Card-Component"
          id="portfolioComponent"
        >
          <section>
            <div className="div">
              <div className="portfolio-box">
                <Carousel autoplay dots={{ className: "carousel" }}>
                  <div>
                    <div className="portfolio-carousel">
                      <img
                        src={imagenes.cv}
                        alt="Imagen 1"
                        style={contentStyle}
                      />
                      <h3>{t("portfolio.info.page1.title")}</h3>
                      <p>{t("portfolio.info.page1.info")}</p>
                      <p>{t("portfolio.info.page1.description")}</p>
                      <a href="https://carlozmata.com/">
                        {t("portfolio.info.page1.url")}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-carousel">
                      <img
                        src={imagenes.mingos}
                        alt="Imagen 1"
                        style={contentStyle}
                      />
                      <h3>{t("portfolio.info.page2.title")}</h3>
                      <p>{t("portfolio.info.page2.info")}</p>
                      <p>{t("portfolio.info.page2.description")}</p>
                      <a href="https://carlozmata.github.io/Mingos/">
                        {t("portfolio.info.page2.url")}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-carousel">
                      <img
                        src={imagenes.cerrada}
                        alt="Imagen 1"
                        style={contentStyle}
                      />
                      <h3>{t("portfolio.info.page3.title")}</h3>
                      <p>{t("portfolio.info.page3.info")}</p>
                      <p>{t("portfolio.info.page3.description")}</p>
                      <a href="https://cerradahortensias.com">
                        {t("portfolio.info.page3.url")}
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="portfolio-carousel">
                      <img
                        src={imagenes.pruebajs}
                        alt="Imagen 1"
                        style={contentStyle}
                      />
                      <h3>{t("portfolio.info.page4.title")}</h3>
                      <p>{t("portfolio.info.page4.info")}</p>
                      <p>{t("portfolio.info.page4.description")}</p>
                      <a href="https://carlozmata.github.io/Practica_JS/">
                        {t("portfolio.info.page4.url")}
                      </a>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default PortfolioComponent;
