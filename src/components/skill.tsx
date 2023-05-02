import { Card, Col, Progress, Row } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/skill.scss";

const SkillComponent = () => {
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
          title={t("skill.title")}
          className="Card-Component"
          id="skillsComponent"
        >
          <section>
            <div className="div">
              <h2>{t("skill.info.skills")}</h2>
              <div className="progress-box">
                <Row className="skill-Row">
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.sk1")}</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.sk2")}</p>
                      <Progress
                        percent={70}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.sk3")}</p>
                      <Progress
                        percent={70}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.sk4")}</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.sk5")}</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.sk6")}</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.sk7")}</p>
                      <Progress
                        percent={70}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.sk8")}</p>
                      <Progress
                        percent={60}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.sk9")}</p>
                      <Progress
                        percent={60}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.sk10")}</p>
                      <Progress
                        percent={95}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              <h2 className="name-skill">{t("skill.info.aptitudes")}</h2>
              <div className="progress-box">
                <Row className="skill-Row">
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.ap1")}</p>
                      <Progress
                        percent={90}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.ap2")}</p>
                      <Progress
                        percent={80}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.ap3")}</p>
                      <Progress
                        percent={90}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                </Row>
              </div>

              <h2 className="name-skill">{t("skill.info.languages")}</h2>
              <div className="progress-box">
                <Row className="skill-Row">
                  <Col xs={24} md={24}>
                    <div className="skills_right">
                      <p className="skills_tech">{t("skill.info.lang1")}</p>
                      <Progress
                        percent={100}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                  <Col xs={24} md={24}>
                    <div className="skills_left">
                      <p className="skills_tech">{t("skill.info.lang2")}</p>
                      <Progress
                        percent={50}
                        showInfo={false}
                        status="active"
                        strokeWidth={20}
                        className="progress-bar"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default SkillComponent;
