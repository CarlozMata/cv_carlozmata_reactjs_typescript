import Card from "antd/es/card/Card";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import AboutMeComponent from "../components/aboutMe";
import SkillComponent from "../components/skill";
import ExperienceComponent from "../components/experience";
import EducationComponent from "../components/education";
import PortfolioComponent from "../components/portfolio";
import CertificatesComponent from "../components/certificates";
import "../styles/cv.scss";
import PresentationComponent from "../components/presentation";
import NavComponent from "../components/nav";
import FooterComponent from "../components/footer";

const CvContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // 1000 milisegundos = 1 segundo
  }, []);

  return (
    <div className="box-components">
      <Card className="Card-First">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <>
            <NavComponent />
            <PresentationComponent />
            <AboutMeComponent />
            <SkillComponent />
            <ExperienceComponent />
            <EducationComponent />
            <PortfolioComponent />
            <CertificatesComponent />
            <FooterComponent />
          </>
        )}
      </Card>
    </div>
  );
};
export default CvContainer;
