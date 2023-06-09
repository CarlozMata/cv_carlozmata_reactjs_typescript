import "../styles/cv.scss";
import "../styles/scssComponents/contact_btn.scss";
import { Affix, Button, Col, Row } from "antd";
import { LinkedinOutlined, UpCircleTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ContactBtnComponent = () => {
  const [bottom, setBottom] = useState(10);

  //Esto es mi cambio de Idioma
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <>
      <div className="div-contact-btn">
        <Affix offsetBottom={bottom}>
          <Button
            className="contact-btn grow-on-hover bounce"
            type="primary"
            href="https://www.linkedin.com/in/carlosalbertolopezmata/"
            target="_blank"
          >
            <LinkedinOutlined className="contact-icon" />
            {t("contact_btn.contact")}
          </Button>
        </Affix>
      </div>
    </>
  );
};
export default ContactBtnComponent;
