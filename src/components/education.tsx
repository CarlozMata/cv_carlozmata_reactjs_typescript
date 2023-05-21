import { Avatar, Card, List, Space } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/cv.scss";
import imagenes from "../styles/img/imagenes";
import "../styles/scssComponents/education.scss";

const EducationComponent = () => {
  //Esto es mi cambio de Idioma
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  const data = [
    {
      avatar: imagenes.platziJpg,
      title: t("education.info.university"),
      description: t("education.info.information"),
    },
    {
      avatar: imagenes.ieuJpg,
      title: t("education.info.university2"),
      description: t("education.info.information2"),
    },
  ];

  return (
    <>
      <main>
        <Card
          title={t("education.title")}
          className="Card-Component"
          id="educationComponent"
        >
          <section>
            <div className="div">
              <List
                itemLayout="horizontal"
                dataSource={data}
                className="education-list"
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src={item.avatar} className="education-img" />
                      }
                      title={<p>{item.title}</p>}
                      description={<p>{item.description}</p>}
                    />
                  </List.Item>
                )}
              />
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default EducationComponent;
