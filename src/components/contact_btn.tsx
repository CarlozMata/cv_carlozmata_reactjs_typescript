import "../styles/cv.scss";
import "../styles/scssComponents/contact_btn.scss";
import { Affix, Button } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";
import { useState } from "react";

const ContactBtnComponent = () => {
  const [bottom, setBottom] = useState(10);

  return (
    <>
      <Affix offsetBottom={bottom}>
        <Button
          className="contact-btn grow-on-hover bounce"
          type="primary"
          href="https://www.linkedin.com/in/carlosalbertolopezmata/"
          target="_blank"
        >
          <LinkedinOutlined className="contact-icon" />
          Contáctame
        </Button>
      </Affix>
    </>
  );
};
export default ContactBtnComponent;
