import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about-me" className="about-section relative py-20 md:py-28 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url(/assets/images/about-background.jpg)" }}>
      <div className="overlay absolute inset-0 bg-black opacity-90 z-0"></div>

      <div className="about-shape absolute right-0 bottom-[30px] max-w-[630px] z-0 hidden lg:block">
        <img src="/assets/images/about-shape.png" alt="shape" className="shape" />
        <span className="circle1 absolute w-32 h-32 bottom-10 left-24 bg-[#f43534] rounded-full"></span>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <img
          src="/assets/images/dot-texture.png"
          alt="pattern img"
          className="dot-pattern absolute left-[-107px] bottom-[20px] hidden xl:block"
        />

        <div className="w-full md:w-1/3 self-stretch hidden md:block">
          <div
            className="about-img1 animate-me h-full bg-cover bg-top md:bg-left"
            style={{ backgroundImage: "url(/assets/images/photo-2023-06-04.jpg)" }}
          >
          </div>
        </div>

        <div className="about-content text-white max-w-xl md:max-w-2xl w-full md:w-2/3 mx-auto md:ml-10 lg:ml-16 py-10 md:py-0 px-4 md:px-0">
          <h2 className="animate-me text-2xl sm:text-3xl lg:text-4xl mb-8 md:mb-12 text-justify font-futura-medium">
            Introducing Unity Link Solutions, my venture in the tech startup
            realm. Within the company, I proudly serve as the leader of our
            technology teams.
          </h2>
          <h5 className="animate-me text-lg sm:text-xl lg:text-2xl leading-relaxed md:leading-loose font-futura-book text-justify md:max-w-md ml-auto">
            I am Zemichael Tefera, a dedicated computer scientist residing in
            Ethiopia. I proudly hold a degree from Addis Ababas esteemed
            institution, St. Mary University. My skill set encompasses a diverse
            range of talents, including proficiency in web design, full stack
            web development, software engineering, and the art of penetration
            testing.
          </h5>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
