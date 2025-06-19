import React from "react";

interface ServiceItemProps {
  iconUrl: string;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ iconUrl, title, description }) => {
  return (
    <div className="single-service bg-[#1c1d21] p-8 md:p-10 text-center border-b-2 border-transparent hover:border-brand-red transition-all duration-500 ease-in-out relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] flex flex-col items-center">
      <img src={iconUrl} alt={title} className="service-icon mb-5 h-16 w-16 object-contain" />
      <h4 className="text-xl lg:text-2xl text-white font-futura-medium mb-4">{title}</h4>
      <p className="text-base lg:text-lg text-[#b9b9b9] font-futura-book leading-relaxed relative z-10">
        {description}
      </p>
      <img
        src="/assets/images/service-box-watermark.png"
        alt="watermark"
        className="watermark absolute bottom-0 right-0 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

const servicesData = [
  {
    iconUrl: "/assets/images/service-icon-webdev.png",
    title: "Web Ideas",
    description: "Get inspired with our creative web design ideas. We provide innovative solutions that cater to your needs. Our team is dedicated to bringing your vision to life, making your online presence stand out from the rest.",
  },
  {
    iconUrl: "/assets/images/service-icon-cybersecurity.png",
    title: "Cyber Security advices",
    description: "Protect your digital assets with our expert cyber security advice. We offer comprehensive solutions to safeguard your online presence from threats and vulnerabilities. Your datas security is our top priority.",
  },
  {
    iconUrl: "/assets/images/service-icon-mobile-app.png",
    title: "mobile-app Design/Development",
    description: "Transform your mobile app ideas into reality with my design and development services. We specialize in creating user-friendly and visually appealing mobile apps that meet your business objectives.",
  },
  {
    iconUrl: "/assets/images/service-icon-ai-solutions.png",
    title: "Artificial intelligence solutions",
    description: "Explore the power of artificial intelligence with my cutting-edge solutions. We harness AI technology to streamline processes and enhance efficiency, driving your business towards success.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="service-section relative py-20 md:py-28 bg-cover bg-left-center" style={{ backgroundImage: "url(/assets/images/service-background.jpg)" }}>
      <h2
        className="section-title absolute top-1/2 left-0 transform -translate-y-1/2 text-[60px] md:text-[90px] lg:text-[140px] font-bold uppercase z-0 text-transparent pl-4"
        style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "#333" }}
      >
        Services
      </h2>
      <div className="container mx-auto px-4 relative z-10">
        <div className="service-wrapper flex flex-wrap justify-center gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              iconUrl={service.iconUrl}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
