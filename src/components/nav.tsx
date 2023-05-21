import { Card, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/nav.scss";
const { Step } = Steps;

const NavComponent = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (currentStep: number) => {
    setCurrent(currentStep);
  };

  //Esto es mi cambio de Idioma
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);
  const steps = [
    {
      title: <a href="#skillsComponent">{t("nav.first")}</a>,
    },
    {
      title: <a href="#experienceComponent">{t("nav.second")}</a>,
    },
    {
      title: <a href="#educationComponent">{t("nav.third")}</a>,
    },
    {
      title: <a href="#certificatesComponent">{t("nav.fourth")}</a>,
    },
  ];

  return (
    <>
      <main>
        <Card className="Card-Component" id="navComponent">
          <div className="nav-min">
            <div>
              <a href="#skillsComponent">{t("nav.first")} |</a>
            </div>
            <div>
              <a href="#experienceComponent">{t("nav.second")} |</a>
            </div>
            <div>
              <a href="#educationComponent">{t("nav.third")} |</a>
            </div>
            <div>
              <a href="#certificatesComponent">{t("nav.fourth")}</a>
            </div>
          </div>
          <div className="div-Steps">
            <div className="div-Steps-Box">
              <Steps
                direction="horizontal"
                current={current}
                onChange={onChange}
                progressDot={true}
                className="Steps horizontal"
                size="small"
              >
                {steps.map((item, index) => (
                  <Step key={index} title={item.title} />
                ))}
              </Steps>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};
export default NavComponent;
