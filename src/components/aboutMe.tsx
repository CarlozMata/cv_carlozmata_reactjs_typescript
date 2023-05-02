import { Card, Descriptions } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import "../styles/scssComponents/aboutMe.scss";
const AboutMeComponent = () => {
  //Obtener edad
  const birthdate: Date = new Date("1992-10-30"); // fecha de nacimiento
  const today: Date = new Date(); // fecha actual
  let age: number = today.getFullYear() - birthdate.getFullYear(); // calcular edad
  if (
    today.getMonth() < birthdate.getMonth() ||
    (today.getMonth() === birthdate.getMonth() &&
      today.getDate() < birthdate.getDate())
  ) {
    age--; // resta 1 si aún no he cumplido años este año
  }

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
          title={t("aboutMe.title")}
          className="Card-Component"
          id="aboutComponent"
        >
          <section>
            <div className="div">
              <p className="aboutMe-Descriptions">
                {t("aboutMe.info.firstParagraph")}
                <br />
                {t("aboutMe.info.secondParagraph")}
                <br />
                {t("aboutMe.info.thirdParagraph")}
              </p>
              <Descriptions
                className="aboutMe-Descriptions"
                title=" "
                layout="horizontal"
              >
                <Descriptions.Item label={t("aboutMe.info.Age")}>
                  {age}
                </Descriptions.Item>
                <Descriptions.Item label={t("aboutMe.info.Email")}>
                  {t("aboutMe.info.email")}
                </Descriptions.Item>
                <Descriptions.Item label={t("aboutMe.info.Address")} span={2}>
                  {t("aboutMe.info.address")}
                </Descriptions.Item>
              </Descriptions>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default AboutMeComponent;
