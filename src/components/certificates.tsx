import { Card } from "antd";
import React, { useEffect } from "react";
import "../styles/cv.scss";
import "../styles/scssComponents/certificates.scss";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import imagenes from "../styles/img/imagenes";

const { Panel } = Collapse;

const CertificatesComponent = () => {
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
          title={t("certificates.title")}
          className="Card-Component"
          id="certificatesComponent"
        >
          <section>
            <div className="div">
              <h2>{t("certificates.info.subtitle")}</h2>
              <ul>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Sistemas de Diseño<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span>julio 2022</span>
                    <p>
                      ID: 2e026835-ece1-4e88-841c-acc2a6704fd9 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/1420-course/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    ECMASCRIPT 6+<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span>junio 2022</span>
                    <p>
                      ID: ec49cf1e-f4de-4d1f-b0b2-6fb4b04b0f9 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/1815-course/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Gestión de Dependencias y Paquetes con NPM<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span>junio 2022</span>
                    <p>
                      ID: e9ff81a9-9003-44ba-b5be-eb1f2824b025 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/1763-course/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.google}
                      alt="logo_google"
                    />
                  </div>
                  <div className="certification-right">
                    Introducción al Desarrollo Web: HTML y CSS<p>Google</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> junio 2022</span>
                    <p>
                      ID: 9SS MFG 85M ➟{" "}
                      <a
                        href="https://learndigital.withgoogle.com/activate/validate-certificate-code"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Single Page Application con JavaScript<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> junio 2022</span>
                    <p>
                      ID: 08960b38-7c23-448f-bb0-02a4d6d31c76 ➟{" "}
                      <a
                        href="platzi.com/p/CarlozMata/curso/1787-spa-javascript/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <Collapse defaultActiveKey={["0"]} ghost>
                  <Panel
                    style={{ marginTop: 20 }}
                    header={
                      <span className="panel">
                        Mostrar todos los Certificados Profesionales (51)
                      </span>
                    }
                    key="1"
                  >
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Programación Orientada a objetos con JavaScript
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio 2022</span>
                        <p>
                          ID: 1133073b-279a-48a9-9580-v16v7b52835f ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2332-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Asincronismo con Javascript<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> mayo 2022</span>
                        <p>
                          ID: 43e9fb7e-6291-4376-975f-52f9ba67b49b ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1789-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Programación Orientada a objetos con JavaScript
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio 2022</span>
                        <p>
                          ID: 1133073b-279a-48a9-9580-v16v7b52835f ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2332-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Asincronismo con Javascript<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> mayo 2022</span>
                        <p>
                          ID: 43e9fb7e-6291-4376-975f-52f9ba67b49b ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1789-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Fundamentos de Javascript 2018<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> mayo 2022</span>
                        <p>
                          ID: Of4eb8b-1e26-4552-9a6c-04dab6c4276d ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1339-fundamentos-javascript-2018/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Responsive Design: Maquetación Mobile First
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> mayo 2022</span>
                        <p>
                          ID: ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2030-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Closures y Scope en JavaScript<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2022</span>
                        <p>
                          ID: 4c1404cd-7ab5-44b0-82da-643cdddaef5 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1807-scope/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Flujo de Desarrollo Moderno CodeStream<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2022</span>
                        <p>
                          ID: 1be56e-14-8abf-452d-8f91-53d6ccc4efea ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2157-desarrollo-moderno-codestream/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Fundamentos de Ingeniería de Software<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2022</span>
                        <p>
                          ID: 5b77c72a-0720-43b5-ba25-f0170bc38458 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1098-ingenieria/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Prework: Configuración de Entorno de Desarrollo en Linux
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2022</span>
                        <p>
                          ID: b6ac87ca-6f47-4737-942d-0b3bb2f4098 ➟{" "}
                          <a href="https" target="__blank">
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Programación Orientada a Objetos<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2022</span>
                        <p>
                          ID: 616ef68a-1328-433b-aca1-d100449b8e7b ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1474-oop/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Computación Básica<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 09c732cc-76cf-4a2e-be90-bcdbf68c995a ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2793-computacion-basica/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Introducción a Terminal y Línea de Comandos 2019
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 0f02caaa-4284-41ae-87ff-5f3691ffe1bf ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1748-terminal-2019/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Introducción a la Terminal y Línea de Comandos 2022
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 45c7b722-2004-4b9b-96c2-4e552fc92525 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2292-terminal/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Práctico de JavaScript<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 6b43a5f5-e00f-4652-8fc4-87bab637ebb5 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2327-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Curso Práctico de FrontEnd Developer<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> febrero 2022</span>
                        <p>
                          ID: 75d48062-bf3d-4726-911a-79952d92c310 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2477-frontend-developer-practico/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        FrontEnd Developer<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> noviembre 2021</span>
                        <p>
                          ID: 369b09df-1509-4d80-a3e3-451245fb2eb6 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2467-frontend-developer/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Maquetación en CSS<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> septiembre 2021</span>
                        <p>
                          ID: 392cce-4a-b745-463c-b03a-5548a3ed73cc ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1744-practico-css/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Básico de Javascript<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> julio 2021</span>
                        <p>
                          ID: 412d8e-4a-23e3-4a98-8eab-650f0eec2b18 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1814-basico-javascript/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Profesional de GIT y GITHUB<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> mayo 2021</span>
                        <p>
                          ID: 09d7fc25-f0aa-4645-ab15-5b2bb1889d78 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1557-git-github/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Básico de Algoritmos y Pensamiento Lógico
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2021</span>
                        <p>
                          ID: 8fff9358-87ec-4418-b39e-e0c3a5ffe906 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2218-pensamiento-logico/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Definitivo de HTML y CSS<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2021</span>
                        <p>
                          ID: 370b8f64-d4c4-4351-912d-f11bbd9fac3a ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2008-html-css/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Práctico de HTML y CSS<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> abril 2021</span>
                        <p>
                          ID: 9e0add3f-ecbd-4ae5-b78-ca4bc6194fd9 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1758-html-practico/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Programación Básica<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2021</span>
                        <p>
                          ID: d5ceca91-bf61-48c5-9f02-715fcb38846 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1050-programacion-basica/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Prework: Configuración de Entorno de Desarrollo en
                        Windows <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> febrero 2021</span>
                        <p>
                          ID: f9419112-db50-4f83-b713.9c595335b9e9 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2042-prework-windows/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Computación Básica<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> enero 2021</span>
                        <p>
                          ID: b16cacar-0ab6-468b-b538-e68b10c1ae2e ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1741-computacion-basica-2019/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Introducción a la Web: Historia y Funcionamiento de
                        Internet<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> enero 2021</span>
                        <p>
                          ID: dd71c668-8450-49a3-a74a-368b0d88907c ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2053-introweb/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Client Data Security 2020<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> julio 2020</span>
                        <p>
                          ID: YW56F1E6NJFEQ39V ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Core Client Credential 2020<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio 2020</span>
                        <p>
                          ID: 3ZM4P3TRGB111RGN ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Workstation Credential 2020<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio 2020</span>
                        <p>
                          ID: 5D3X39F6MM4Q1S9K ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Data Center Portfolio Credential 2019<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> diciembre 2019</span>
                        <p>
                          ID: QLQKCFBTENQ4Q9CP ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Data Protection Credential 2019<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> diciembre 2019</span>
                        <p>
                          ID: CTYBDEXTMFE415CC ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Networking Credential 2019<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> diciembre 2019</span>
                        <p>
                          ID: TJYBDQVT3FE1QWWB ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Core Client Credential 2019<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2019</span>
                        <p>
                          ID: EXMGGEEZEEVE1DGH ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Workstation Credential 2019<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2019</span>
                        <p>
                          ID: B0ENDB163BV1QV93 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Workstation Credential 2019<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2019</span>
                        <p>
                          ID: B0ENDB163BV1QV93 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.veeam}
                          alt="logo_veeam"
                        />
                      </div>
                      <div className="certification-right">
                        Veeam Certified Veeam Sales Profesional<p>Veeam</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> mayo 2020</span>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Client Data Security Credential 2018<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> diciembre 2018</span>
                        <p>
                          ID: P81B4YJZL2V11E3E ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Cloud Client-Computing Credential 2018
                        <p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> diciembre 2018</span>
                        <p>
                          ID: 6V1JQ2NRL1FQ1R38 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Data Center Portfolio Credential 2018<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> agosto 2018</span>
                        <p>
                          ID: 4BFDB39ZLEF41WWJ ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        SE: Core Client Credential 2018<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio</span>
                        <p>
                          ID: F6MJBK7RLB4E1HW2 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Sales: Core Client Credential 2018<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio 2018</span>
                        <p>
                          ID: X6E2F6KZL1VE18K8 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Sales: Workstation Credential 2018<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> junio 2018</span>
                        <p>
                          ID: HBGJBP2TJ1VQ1G33 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        SE: Workstation Credential 2018<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2017</span>
                        <p>
                          {" "}
                          ID: C6221656J2BE1J32 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Marketing Expert Credential 2017<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> diciembre 2017</span>
                        <p>
                          ID: ZLZDG25Z2BBE1W3P ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Core Client Credential 2017<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2017</span>
                        <p>
                          ID: STFKF0MRDJF41PS8 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Workstation Credential 2017<p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2017</span>
                        <p>
                          ID: S6P2E9YRBF44QLK7 ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.dell}
                          alt="logo_dell"
                        />
                      </div>
                      <div className="certification-right">
                        Cloud Client-Computin Credential 2017 <p>Dell EMC</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> octubre 2016</span>
                        <p>
                          ID: B6PCF92ZDN4QQJ3B ➟{" "}
                          <a
                            href="https://www.certmetrics.com/dell/public/verification.aspx"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                  </Panel>
                </Collapse>
              </ul>
              <div className="separator"></div>
              <h2 style={{ marginTop: 20 }}>
                {t("certificates.info.subtitle2")}
              </h2>
              <ul>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Estrategias de Productividad y Organización<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> julio 2022</span>
                    <p>
                      ID: e50f2325-9909-4d88-a7f-5a17199059d6 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/2497-course/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Superar el Síndrome del Impostor<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> julio 2022</span>
                    <p>
                      ID: 8a6d309f-f18c-4eba-b314-8e0fb1894805 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/2668-sindrome-impostor/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Debugging con Chrome DevTools<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> junio 2022</span>
                    <p>
                      ID: 15b6dbc0-37de-437c-a729-36bce28d95dd ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/1867-course/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Curso de Marca Personal: Creación de tu blog desde Cero
                    <p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> mayo 2022</span>
                    <p>
                      ID: eff2c44d-432a-476b-bc65-1384f80f2d10 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/2593-course/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <li className="certifications-li">
                  <div className="certification-left">
                    <img
                      className="img_university_cert"
                      src={imagenes.platziJpg}
                      alt="logo_platzi"
                    />
                  </div>
                  <div className="certification-right">
                    Estrategias de Contenido para LinkedIn<p>Platzi</p>
                    <span>{t("certificates.info.date")}</span>{" "}
                    <span> marzo 2022</span>
                    <p>
                      ID: 1e4f6450-0c43-4a71-9b97-d50744c5a684 ➟{" "}
                      <a
                        href="https://platzi.com/p/CarlozMata/curso/2212-estrategias-contenido-linkedin/diploma/detalle/"
                        target="__blank"
                      >
                        {t("certificates.info.see")}
                      </a>
                    </p>
                  </div>
                </li>
                <Collapse defaultActiveKey={["0"]} ghost>
                  <Panel
                    style={{ marginTop: 20 }}
                    header={
                      <span className="panel">
                        Mostrar todos los Certificados Personales (13)
                      </span>
                    }
                    key="1"
                  >
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Marca Personal 2018<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 5283444d-8ef4-46ae-9453-c3797c090c24 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1220-marca-personal-2018/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Marca Personal 2022<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: f306df0f-211e-483d-ar17-97751aef783 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2822-marca-personal/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Optimización Perfil de LinkedIn<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 3e9c6045-9318-4039-9345-2e875c87fea1 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2499-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Organización Digital<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> marzo 2022</span>
                        <p>
                          ID: 3b16f4ff-4cfe-49d8-ba4c-c8991797cab9c ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2177-course/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Estrategias para Aprender en Línea<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> febrero 2022</span>
                        <p>
                          ID: 42d2a19b-804a-4d50-a2c3-259b8df5f6a6 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/2643-aprender/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Gestión Efectiva del Tiempo<p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> febrero 2022</span>
                        <p>
                          ID: df7ae01d-6760-43ee-a96e-93671650adf5 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1749-gestion-tiempo/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.platziJpg}
                          alt="logo_platzi"
                        />
                      </div>
                      <div className="certification-right">
                        Estrategias para Aprender en Línea Efectivamente
                        <p>Platzi</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> noviembre 2021</span>
                        <p>
                          ID: 52b4ace6-1228-45b8-o9c42-2d178ceefab6 ➟{" "}
                          <a
                            href="https://platzi.com/p/CarlozMata/curso/1608-aprender-2019/diploma/detalle/"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="certifications-li">
                      <div className="certification-left">
                        <img
                          className="img_university_cert"
                          src={imagenes.google}
                          alt="logo_google"
                        />
                      </div>
                      <div className="certification-right">
                        Productividad Personal<p>Google</p>
                        <span>{t("certificates.info.date")}</span>{" "}
                        <span> septiembre 2020</span>
                        <p>
                          ID: WQ3 JDP W2X ➟{" "}
                          <a
                            href="https://learndigital.withgoogle.com/link/1nur091p2ww"
                            target="__blank"
                          >
                            {t("certificates.info.see")}
                          </a>
                        </p>
                      </div>
                    </li>
                  </Panel>
                </Collapse>
              </ul>
            </div>
          </section>
        </Card>
      </main>
    </>
  );
};
export default CertificatesComponent;
