import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import imagenes from "../styles/img/imagenes";
import "../styles/scssComponents/experience.scss";

const ExperienceComponent = () => {
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
          title={t("experience.title")}
          className="Card-Component"
          id="experienceComponent"
        >
          <section>
            <div className="div">
              <div className="experience-div">
                <Row>
                  <Col lg={20} md={20} sm={18} xs={17}>
                    <div className="experience-all-titles">
                      <h3>
                        <a href="https://macropay.mx/" target="__blank">
                          {t("experience.info.company5.companyname")}
                        </a>
                      </h3>
                      <div className="experience-title">
                        <h4>{t("experience.info.company5.position")}</h4>
                        <h5>{t("experience.info.company5.address")}</h5>
                        <h6>{t("experience.info.company5.dates")}</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6} xs={7}>
                    <div className="experience-img">
                      <img
                        className="experience-company"
                        src={imagenes.macropay}
                        alt="Logotipo Macropay"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="experience-list">
                  <ul>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company5.act1")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company5.act2")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company5.act3")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company5.act4")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company5.act5")}
                    </li>
                  </ul>
                </div>
                <Row>
                  <Col lg={20} md={20} sm={18} xs={17}>
                    <div className="experience-all-titles">
                      <h3>
                        <a href="https://carlozmata.com/" target="__blank">
                          {t("experience.info.company4.companyname")}
                        </a>
                      </h3>
                      <div className="experience-title">
                        <h4>{t("experience.info.company4.position")}</h4>
                        <h5>{t("experience.info.company4.address")}</h5>
                        <h6>{t("experience.info.company4.dates")}</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6} xs={7}>
                    <div className="experience-img">
                      <img
                        className="experience-company"
                        src={imagenes.freelance}
                        alt="Logotipo Freelance"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="experience-list">
                  <ul>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act1")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act2")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act3")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act4")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act5")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act6")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act7")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company4.act8")}
                    </li>
                  </ul>
                </div>
                <Row>
                  <Col lg={20} md={20} sm={18} xs={17}>
                    {" "}
                    <div className="experience-all-titles">
                      <h3>
                        <a href="https://imoti.mx/" target="__blank">
                          {t("experience.info.company3.companyname")}
                        </a>
                      </h3>
                      <div className="experience-title">
                        <h4>{t("experience.info.company3.position")}</h4>
                        <h5>{t("experience.info.company3.address")}</h5>
                        <h6>{t("experience.info.company3.dates")}</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6} xs={7}>
                    {" "}
                    <div className="experience-img">
                      <img
                        className="experience-company"
                        src={imagenes.IMOJpg}
                        alt="Logotipo IMO"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="experience-list">
                  <ul>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act1")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act2")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act3")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act4")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act5")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act6")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act7")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act8")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act9")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act10")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act11")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act12")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act13")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company3.act14")}
                    </li>
                  </ul>
                </div>
                <Row>
                  <Col lg={20} md={20} sm={18} xs={17}>
                    <div className="experience-all-titles">
                      <h3>
                        <a
                          href="https://www.lbsistemas.com.mx/"
                          target="__blank"
                        >
                          {t("experience.info.company2.companyname")}
                        </a>
                      </h3>
                      <div className="experience-title">
                        <h4>{t("experience.info.company2.position")}</h4>
                        <h5>{t("experience.info.company2.address")}</h5>
                        <h6>{t("experience.info.company2.dates")}</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6} xs={7}>
                    <div className="experience-img">
                      <img
                        className="experience-company"
                        src={imagenes.LBJpg}
                        alt="Logotipo LB SISTEMAS"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="experience-list">
                  <ul>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company2.act1")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company2.act2")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company2.act3")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company2.act4")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company2.act5")}
                    </li>
                  </ul>
                </div>
                <Row>
                  <Col lg={20} md={20} sm={18} xs={17}>
                    <div className="experience-all-titles">
                      <h3>
                        <a href="https://www.lared.mx/" target="__blank">
                          {t("experience.info.company1.companyname")}
                        </a>
                      </h3>
                      <div className="experience-title">
                        <h4>{t("experience.info.company1.position")}</h4>
                        <h5>{t("experience.info.company1.address")}</h5>
                        <h6>{t("experience.info.company1.dates")}</h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={4} sm={6} xs={7}>
                    {" "}
                    <div className="experience-img">
                      <img
                        className="experience-company"
                        src={imagenes.LAREDJpg}
                        alt="Logotipo LA RED"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="experience-list">
                  <ul>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act1")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act2")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act3")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act4")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act5")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act6")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act7")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act8")}
                    </li>
                  </ul>
                </div>
                <Row>
                  <Col lg={20} md={20} sm={18} xs={16}>
                    <div className="experience-all-titles">
                      <div className="experience-title">
                        <h4>{t("experience.info.company1.position2")}</h4>
                        <h5>{t("experience.info.company1.address2")}</h5>
                        <h6>{t("experience.info.company1.dates2")}</h6>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="experience-list">
                  <ul>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act1")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act9")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act10")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act11")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act12")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act13")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act14")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act15")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act16")}
                    </li>

                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act17")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act18")}
                    </li>
                    <li>
                      <p className="iconAntDesign">✳️</p>
                      {t("experience.info.company1.act19")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default ExperienceComponent;
