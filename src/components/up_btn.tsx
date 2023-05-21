import "../styles/cv.scss";
import "../styles/scssComponents/up_btn.scss";
import { Affix, Button } from "antd";
import { LinkedinOutlined, UpCircleTwoTone } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const UpBtnComponent = () => {
  const [bottom, setBottom] = useState(10);

  //Esto es mi cambio de Idioma
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  return (
    <>
      <Affix offsetBottom={bottom}>
        <Button
          className=" up-btn grow-on-hover bounce"
          type="primary"
          href="#navComponent"
        >
          <UpCircleTwoTone className="up-icon" />
        </Button>
      </Affix>
    </>
  );
};
export default UpBtnComponent;
