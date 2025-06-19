import React from "react";
import Slider from "react-slick";

const projects = [
  {
    type: "Management System For:",
    name: "Wings of Healing",
    description: "Designed and developed a comprehensive Human Resource Management System (HRMS) to streamline employee records, attendance tracking, payroll processing, and performance evaluation. The system featured role-based access control and integrated automated email notifications, secure authentication, and data reporting dashboards.",
    imageUrl: "/assets/images/portfolio-wings-of-healing-hrms.png",
    liveLink: null,
  },
  {
    type: "Online Food Delivery",
    name: "For Ethiopian Governmental University",
    description: "Im in the process of creating an online food delivery system in partnership with Ethiopian Governmental Universities, with a focus on providing valuable job opportunities for students while improving dining services.",
    imageUrl: "/assets/images/portfolio-online-food-delivery.png",
    liveLink: null,
  },
  {
    type: "Official Website",
    name: "ButaJira City Administration, Official Website",
    description: "Created the official website for Butajira City Administration, providing comprehensive information about the city and its government structure in multiple languages.",
    imageUrl: "/assets/images/portfolio-butajira-website.png",
    liveLink: "https://butajiracityadministration.com/",
  },
  {
    type: "Learning Management System",
    name: "INSA Cyber Talent Center, LMS",
    description: "Developed a Learning Management System (LMS) for the INSA Cyber Talent Center. This platform provides organizations and learners with access to diverse courses, supporting corporate training and personal development. Key features include an intuitive interface, progress tracking, customizable modules, and analytics dashboards.",
    imageUrl: "/assets/images/insa-cyber-talent-lms.png",
    liveLink: "https://cec.insa.gov.et/",
  },
  {
    type: "AI Finance Tool (Demo)",
    name: "ZamZam Bank: AI Finance Tool Collaboration",
    description: "Developed a demo version of an AI-powered finance tool to present to ZamZam Bank for potential collaboration. Built user dashboards and backend document analysis APIs, enabling secure file upload and integrated recommendation features. The system was deployed in a containerized environment with API gateway routing.",
    imageUrl: "/assets/images/zamzam-bank-ai-tool-demo.png",
    liveLink: null,
  },
  {
    type: "ParkLink",
    name: "ParkLink (MVP)",
    description: "ParkLink is a dedicated, centralized digital platform designed specifically for the Parks Administration Office. It provides full visibility into park operations, rental agreements, issue reporting, documentation, and asset oversight—all from one secure system. The solution is intended to help the government modernize oversight, prevent fraud, and make data-driven decisions.",
    imageUrl: "/assets/images/parklink-mvp.png",
    liveLink: null,
  },
  {
    type: "Personality Testing Platform",
    name: "INSA Personality Testing Platform",
    description: "Built responsive frontend interfaces and secured backend APIs for a personality testing platform. Leveraged Kubernetes for container orchestration and implemented JWT-based access control with RBAC for enhanced security. Integrated Prometheus and Grafana for comprehensive performance monitoring.",
    imageUrl: "/assets/images/insa-personality-testing-platform-light.png",
    liveLink: "https://personality.insa.gov.et/",
  },
  {
    type: "Official Artist Website",
    name: "ETDM: Ethiopian Dance Music",
    description: "Developed the official website for a renowned choreographer and cultural ambassador who introduced the new genre \"ETDM\" (Ethiopian Dance Music). The site highlights his achievements and cultural impact. Currently in development, the platform will soon feature ETDM merchandise purchasing and additional interactive features.",
    imageUrl: "/assets/images/lij-temesgen-melese-official.png",
    liveLink: "https://etdm-lij-temesgen-personal-website-five.vercel.app",
  }
];

const PortfolioSection: React.FC = () => {
  const [paging, setPaging] = React.useState("");

  const sliderSettingsContent = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    speed: 500,
    prevArrow: <button type="button" className="slick-prev absolute left-0 bottom-0 z-10 bg-transparent border border-white w-12 h-12 rounded-full flex items-center justify-center text-white opacity-20 hover:opacity-100 hover:bg-brand-red hover:border-brand-red"><img src="/assets/images/arrow-right-white.png" alt="Previous" className="w-4 h-4 transform rotate-180" /></button>,
    nextArrow: <button type="button" className="slick-next absolute left-16 bottom-0 z-10 bg-transparent border border-white w-12 h-12 rounded-full flex items-center justify-center text-white opacity-20 hover:opacity-100 hover:bg-brand-red hover:border-brand-red"><img src="/assets/images/arrow-right-white.png" alt="Next" className="w-4 h-4" /></button>,
    asNavFor: ".portfolio-image-slider",
      onInit: () => setPaging(`1/${projects.length}`),
      onReInit: () => setPaging(`1/${projects.length}`),
      afterChange: (current: number) => setPaging(`${current + 1}/${projects.length}`),
  };

  const sliderSettingsImages = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1500,
    asNavFor: ".portfolio-content-slider",
  };

  return (
    <section id="portfolio" className="portfolio-section relative py-20 md:py-28 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url(/assets/images/portfolio-background.jpg)" }}>
      <div className="overlay absolute inset-0 bg-black opacity-85 z-0"></div>

      <h2 className="section-title absolute top-1/2 left-0 transform -translate-y-1/2 text-[60px] md:text-[90px] lg:text-[140px] font-bold uppercase z-0 text-transparent"
          style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "#333" }}
          data-enllax-ratio="-0.5" data-enllax-type="foreground"
      >
        Projects
      </h2>

      <img src="/assets/images/portfolio-shape.png" alt="shape" className="shape absolute bottom-[100px] left-[-120px] opacity-80 z-0 hidden lg:block" data-enllax-ratio="0.5" data-enllax-type="foreground" />

      <div className="container mx-auto px-4 relative z-10 max-w-screen-xl">
        <div className="portfolio-wrapper flex flex-col lg:flex-row">
          <div className="portfolio-content-wrapper w-full lg:w-2/5 lg:pr-16 relative mb-8 lg:mb-0">
            <Slider {...sliderSettingsContent} className="portfolio-content-slider">
              {projects.map((project, index) => (
                <div key={index} className="portfolio-content outline-none focus:outline-none py-10 lg:py-0">
                  <span className="portfolio-type text-sm uppercase text-brand-red font-bold font-futura-medium tracking-wider">{project.type}</span>
                  <h2 className="text-3xl lg:text-4xl text-white font-futura-medium my-4">{project.name}</h2>
                  <p className="text-base lg:text-lg text-[#ababab] font-futura-book leading-relaxed text-justify mb-6">{project.description}</p>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="live-view link-default inline-flex items-center text-white font-futura-medium group">
                      View Live
                      <span className="ml-2 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center transition-all duration-300 group-hover:animate-pulse">
                        <img src="/assets/images/arrow-right-white.png" alt="arrow" className="w-4 h-4" />
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </Slider>
            <div className="portfolio-paging-status absolute left-32 bottom-2 text-xl font-bold text-brand-red hidden sm:block">{paging}</div>
          </div>

          <div className="portfolio-img-wrapper w-full lg:w-3/5 relative">
            <Slider {...sliderSettingsImages} className="portfolio-image-slider bg-[#1e1f23]">
              {projects.map((project, index) => (
                <div key={index} className="img-area outline-none focus:outline-none">
                  <img src={project.imageUrl} alt={project.name} className="w-full h-auto object-cover" style={{maxHeight: "500px"}} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
