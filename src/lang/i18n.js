import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      es: {
        translation: {
          nav: {
            first: "Habilidades",
            second: "Experiencia",
            third: "Educación y Portafolio",
            fourth: "Certificados",
          },
          presentation: {
            title: "Presentación",
            info: {
              name: "Carlos Alberto López Mata",
              work: "Front-End Developer Jr",
              download:"Descargar CV",
            }
          },
          aboutMe: {
            title: "Acerca de mi",
            info: {
              firstParagraph: "Hola! Soy Carlos Mata ",
              secondParagraph:"💼Profesional, responsable, creativo, organizado con capacitación constante y apasionado de la Tecnología. Con más de 6 años de experiencia en el área de TI y gran fascinación con la programación tratando siempre mantenerme actualizado.",
              thirdParagraph:"💻He tenido la oportunidad de Crear, Administrar sitios web,     Participar en proyectos implementando nuevas funcionalidades y migración de nuevos proyectos a nuevas tecnologías utilizando MicroFronts.",
              Age: "Edad",
              Email: "Correo",
              Address: "Dirección",
              email: "carlos_1992_@hotmail.com",
              address: "Mérida, Yuc. México."
            }
          },
          skill: {
            title: "Habilidades Profesionales",
            info: {
              //ESTO ES NUEVO Y CAMBIAR EN IDIOMA
              skills:"Habilidades",
              sk1: "React",
              sk2: "NextJs",
              sk3: "TypeScript",
              sk4:"JavaScript",
              sk5:"Git/GitHub",
              sk6:"HTML5 y CSS3",
              sk7: "Ant Design",
              sk8:"Figma",
              sk9:"Wordpress",
              sk10:"Office 365",
              ap1: "Trabajo en Equipo",
              ap2: "Resolución de Problemas",
              ap3: "Aprendizaje Continuo",


              languages: "Idiomas",
              lang1:"Español",
              lang2:"Ingles: B1",
            }
          },
          experience: {
            title: "Experiencia",
            info: {
              company1: {
                companyname:"LA RED CORPORATIVO",
                position: "Soporte Tecnico",
                address: "Villahermosa, Tabasco, México.",
                dates: "Jornada completa / agosto 2016 - agosto 2017. 1 año 1 mes",
                act1:"Atención a Clientes.",
                act2:"Administración de Mesa de Servicio.",
                act3:"Garantías de equipos Dell.",
                act4:"Certificaciones en Marca: DELL y TRIPPLITE.",
                act5:"Resolución de problemas a equipos de TI dentro de las instalaciones.",
                act6:"Diagnósticos y Reparación de equipos de cómputo e impresoras.",
                act7:"Mantenimiento preventivo y correctivo de equipos de computo e impresoras.",
                act8:"Diseños de Marketing para correo y Sitio Web.",
                position2: "Inside Sales",
                address2: "Villahermosa, Tabasco, México.",
                dates2: "Jornada completa (2 años 8 meses) / septiembre 2017 - marzo 2019. 1 año 7 meses",
                act9:"Elaboración de Cotizaciones y Propuestas de TI.",
                act10:"Interacción con Proveedores y Clientes.",
                act11:"Apoyo inmediato a Ejecutivos de ventas.",
                act12:"Elaboración de documentación para proyectos.",
                act13:"Identificación de las especificaciones técnicas de los productos.",
                act14:"Dimensionamiento de soluciones Enterprise.",
                act15:"Entrenamientos de la marca para Partners y Mayoristas.",
                act16:"Certificaciones en Marca: DELL y TRIPPLITE.",
                act17:"Elaboración de Licitaciones publicas y privadas.",
                act18:"Diseño de banner publicitario para correos.",
                act19:"Diseños de Marketing para correo y Sitio Web.",
                act20:"Soporte Tecnico | Inside Sales",
                act21:"Jornada completa / agosto 2016 - marzo 2019. 2 años 8 meses"

              },
              company2: {
                companyname:"LB SISTEMAS",
                position: "Inside Sales",
                address: "Mérida, Yucatán, México",
                dates: "Jornada completa / abril 2019 - julio 2019. 4 meses",
                act1:"Prospección de nuevas Cuentas",
                act2:"Desarrollo de Cuentas",
                act3:"Elaboración de Cotizaciones y Propuestas de TI",
                act4:"Interacción con Clientes y Proveedores",
                act5:"Visita y Llamadas a Clientes",
              },
              company3: {
                companyname:"IMO TI",
                position: "Inside Sales Representative",
                address: "Mérida, Yucatán, México",
                dates: "Jornada completa / agosto 2019 - julio 2022. 3 años",
                act1:"Elaboración de Cotizaciones y Propuestas de TI",
                act2:"Dimensionamiento y Comercialización de soluciones Enterprise",
                act3:"Detección de nuevas Oportunidades de Negocio",
                act4:"Prospección de nuevas Cuentas en Sureste",
                act5:"Relacionamiento con Cartera de Clientes",
                act6:"Negociación con Proveedores",
                act7:"Seguimiento de Ordenes de Compras",
                act8:"Seguimiento de Inventarios",
                act9:"Visita y Llamadas a Clientes para Seguimientos",
                act10:"Atención a Clientes",
                act11:"Elaboración de documentación para proyectos",
                act12:"Identificación de las especificaciones técnicas de los productos",
                act13:"Entrenamientos de la marca para Partners y Mayoristas",
                act14:"Certificaciones en Marcas: DELL, VMWARE Y VEEAM",
              },
              company4: {
                companyname:"MINGOS",
                position: "Desarrollador Web",
                address: "Mérida, Yucatán, México",
                dates: "Profesional Independiente / Febrero 2022 - Septiembre 2022. 8 Meses",
                act1:"Presentación de diseños",
                act2:"Creación de Sitio Web con HTML, CSS y JavaScript",
                act3:"Manejo de ramas en Git/Github",
                act4:"Edición y adaptación de Imágenes con Photoshop",
                act5:"Adquisición de Dominio",
                act6:"Activación de Sitio web en linea",
                act7:"Vinculación con Google Analytics",
                act8:"Administración de Sitio Web",
              },
              company5: {
                companyname:"MACROPAY",
                position: "FrontEnd Developer Jr",
                address: "Mérida, Yucatán, México",
                dates: "Jornada Completa / Agosto 2022 - Actualidad",
                act1:"Next",
                act2:"React",
                act3:"Ant Design",
                act4:"Git/Github",
                act5:"Typescript",
                act6:"SCSS",
              },
            }          },
          education: {
            title: "Educación",
            info: {
              university: "Platzi",
              information: "Desarrollo Web, Desarrollo de páginas web, contenido digital/multimedia y recursos informáticos. Enero 2021 - Actualidad 2022",
              university2: "Universidad IEU",
              information2: "Ingeniero en Sistemas y Tecnologías de la Información, Tecnología informática/Tecnología de sistemas informáticos. 2013 - 2016",
            }
          },
          portfolio: {
            title: "Portafolio",
            info: {
              page1: {
                title:"SITIO WEB PERSONAL PROFESIONAL",
                info:"Creación de Sitio Web para fines profesionales",
                description:"HTML5, CSS3, JavaScript, Git/Github",
                url:"https://carlozmata.com/",
              },
              page2: {
                title:"HELADOS MINGOS",
                info:"Sitio Web para Small Business del giro de Postres",
                description:"HTML5, CSS3, JavaScript, Git/Github, Photoshop",
                url:"https://heladosmingos.com/",
              },
              page3: {
                title:"SITIO WEB RESIDENCIAL",
                info:"Creación de Sitio Web con fines informativos",
                description:"WordPress, CSS3, JavaScript, Elementor, FileZilla",
                url:"https://cerradahortensias.com",
              },
              page4: {
                title:"Practica JS",
                info:"Pagina web para practicar JavaScript y CSS3",
                description:"HTML5 / CSS3 / JavaScript",
                url:"https://carlozmata.github.io/Practica_JS/",
              },
            }
          },
          certificates: {
            title: "Certificados",
            info: {
              subtitle: "Certificados Profesionales",
              subtitle2: "Certificados Personales",
              date:"Expedición: ",
              see: "Ver Certificado",
            }
          },
          footer: {
            name:"CarlozMata ©",
            github:"GitHub |",
            linkedln:"Linkedln",
          },
          contact_btn: {
            contact:"Contáctame"
          }
        }
      },
      en: {
        translation: {
          nav: {
            first: "Skills",
            second: "Experience",
            third: "Education and Portfolio",
            fourth: "Certifications",
          },
          presentation: {
            title: "Presentation",
            info: {
              name: "Carlos Alberto López Mata",
              work: "Front-End Developer Jr",
              download:"Download CV",
            }
          },
          aboutMe: {
            title: "About Me",
            info: {
              firstParagraph: "Hi! I´m Carlos Mata",
              secondParagraph:"💼 A professional, responsible, creative, and organized with ongoing training and a passion for Technology. I have over 6 years of experience in the IT field and a great fascination with programming, always striving to stay up to date.",
              thirdParagraph:"💻 I have had the opportunity to create and manage websites, participate in projects implementing new functionalities, and migrate new projects to new technologies using MicroFronts.",
              Age: "Age",
              Email: "Email",
              Address: "Address",
              email: "carlos_1992_@hotmail.com",
              address: "Mérida, Yuc. México."
            }
          },
          skill: {
            title: "Professional Skills",
            info: {
              skills: "Skills",
              sk1: "HTML5",
              sk2:"CSS3",
              sk3:"JavaScript",
              sk4:"Git",
              sk5:"Adobe PhotoShop CS6",
              sk6:"Linux",
              sk7:"Office 365",
              sk8:"Wordpress",
              aptitudes: "Aptitudes",
              ap1:"TeamWork",
              ap2:"Service Desk",
              ap3:"TI",
              languages: "Languages",
              lang1:"Spanish",
              lang2:"English: B1",
            }
          },
          experience: {
            title: "Experience",
            info: {
              company1: {
                companyname:"LA RED CORPORATIVO",
                position: "Tech Support",
                address: "Villahermosa, Tabasco, México.",
                dates: "Full-Time / August 2016 - August 2017. 1 Year and 1 Month",
                act1:"Customer Service",
                act2:"Warranty of equipment Dell",
                act3:"Administration Service Desk",
                act4:"Certifications Brand: DELL and TRIPPLITE",
                act5:"Resolution of problems the teams of IT inside of the installations",
                act6:"Diagnostics and repair of computers and printers",
                act7:"Maintenance preventive and corrective of computers and printers",
                act8:"Designs of Marketing for emails and website",
                position2: "Inside Sales",
                address2: "Villahermosa, Tabasco, México.",
                dates2: "Full-Time (2 Years and 8 months) / September 2017 - March 2019. 1 year 7 months",
                act9:"Elaboration of Quotes and IT proposals",
                act10:"Interaction with Clients and Providers",
                act11:"Support immediate to sales executives",
                act12:"Elaboration of documentation for projects",
                act13:"Identification of the technical specifications of the products",
                act14:"Dimensioning Solutions Enterprise",
                act15:"Training of the brand of Partners and Wholesalers",
                act16:"Certifications Brand: DELL and TRIPPLITE",
                act17:"Elaborations of tenders public and private",
                act18:"Designs of banner publicity for emails",
                act19:"Designs of Marketing for emails and website",
                act20:"Tech Support | Inside Sales",
                act21:"Full-Time / August 2016 - March 2019. 2 Years 8 Mounths"
              },
              company2: {
                companyname:"LB SISTEMAS",
                position: "Inside Sales",
                address: "Mérida, Yucatán, México",
                dates: "Full-Time / April 2019 - July 2019. 4 Months",
                act1:"Prospecting for new Accounts",
                act2:"Interaction with Clients and Providers",
                act3:"Development of Accounts",
                act4:"Elaboration of Quotes and de Cotizaciones y IT proposals",
                act5:"Visit and calls to Clients for Follow-ups",
              },
              company3: {
                companyname:"IMO TI",
                position: "Inside Sales Representative",
                address: "Mérida, Yucatán, México",
                dates: "Full-Time / August 2019 - July 2022. 3 Years",
                act1:"Elaboration of Quotes and IT proposals",
                act2:"Dimensioning and Commercialization of enterprise solutions",
                act3:"Detection of new Business Opportunities",
                act4:"Prospecting for new Accounts in Southeast",
                act5:"Relationship with Client Portfolio",
                act6:"Negotiation with Providers",
                act7:"Tracking purchase order",
                act8:"Tracking Inventory",
                act9:"Visit and calls to Clients for Follow-ups",
                act10:"Customer Service",
                act11:"Elaboration of documentation for projects",
                act12:"Identification of the technical specifications of the products",
                act13:"Training of the brand of Partners and Wholesalers",
                act14:"Certifications Brand: DELL, VMWARE Y VEEAM",
              },
              company4: {
                companyname:"MINGOS",
                position: "Web Developer",
                address: "Mérida, Yucatán, México",
                dates: "Independent Professional / Febrary 2022 - September 2022. 8 Months",
                act1:"Presentation of designs",
                act2:"Website creation with HTML, CSS y JavaScript",
                act3:"Branch management in Git/Github",
                act4:"Image editing and adaptation with Photoshop",
                act5:"Domain Acquisition",
                act6:"Online Website Activation",
                act7:"Link with Google Analytics",
                act8:"Website Administration",
              },
              company5: {
                companyname:"MACROPAY",
                position: "FrontEnd Developer Jr",
                address: "Mérida, Yucatán, México",
                dates: "Full-Time / August 2022 - Present",
                act1:"Next",
                act2:"React",
                act3:"Ant Design",
                act4:"Git/Github",
                act5:"Typescript",
                act6:"SCSS",
              },
            }          },
          education: {
            title: "Education",
            info: {
              university: "Platzi",
              information: "Web Development, Development of web pages. January 2021 - Actuality 2023",
              university2: "University IEU",
              information2: "Systems and Information Technology Engineer. 2013 - 2016",
            }
          },
          portfolio: {
            title: "Portfolio",
            info: {
              page1: {
                title:"PERSONAL PROFESSIONAL WEBSITE",
                info:"Creation of the website for professional",
                description:"HTML5, CSS3, JavaScript, Git/Github",
                url:"https://carlozmata.com/",
              },
              page2: {
                title:"HELADOS MINGOS",
                info:"Website for Small Business the dessert",
                description:"HTML5, CSS3, JavaScript, Git/Github, Photoshop",
                url:"https://heladosmingos.com/",
              },
              page3: {
                title:"RESIDENCIAL WEBSITE",
                info:"Creation of Website for inform",
                description:"WordPress, CSS3, JavaScript, Elementor, FileZilla",
                url:"https://cerradahortensias.com",
              },
              page4: {
                title:"Pratice JS",
                info:"Web page to practice JavaScript y CSS3",
                description:"HTML5 / CSS3 / JavaScript",
                url:"https://carlozmata.github.io/Practica_JS/",
              },
            }
          },
          certificates: {
            title: "Certificates",
            info: {
              subtitle: "Professional Certificates",
              subtitle2: "Personal Certificates",
              date:"Expedition: ",
              see: "See Certificate",
            }
          },
          footer: {
            name:"CarlozMata ©",
            github:"GitHub |",
            linkedln:"Linkedln",
          },
          contact_btn: {
            contact:"Contact me"
          }
        }
      },
    }
  });

export default i18n;