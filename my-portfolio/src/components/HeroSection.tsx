import React from "react";

const HeroSection: React.FC = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about-me");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url(/assets/images/hero-background.jpg)" }}>
      <span className="vertical-line hidden md:block fixed top-0 h-screen w-px bg-[#26272d] z-10" style={{ left: "calc(100% / 6)" }}></span>
      <span className="vertical-line hidden md:block fixed top-0 h-screen w-px bg-[#26272d] z-10" style={{ left: "calc(100% / 6 * 2)" }}></span>
      <span className="vertical-line hidden md:block fixed top-0 h-screen w-px bg-[#26272d] z-10" style={{ left: "calc(100% / 6 * 3)" }}></span>
      <span className="vertical-line hidden md:block fixed top-0 h-screen w-px bg-[#26272d] z-10" style={{ left: "calc(100% / 6 * 4)" }}></span>
      <span className="vertical-line hidden md:block fixed top-0 h-screen w-px bg-[#26272d] z-10" style={{ left: "calc(100% / 6 * 5)" }}></span>

      <div className="hero-image-wrapper absolute right-1/2 top-0 h-full z-10 transform translate-x-1/2 container mx-auto hidden lg:block">
        <span
          className="hero-image animate-me block absolute right-[6px] h-full w-full max-w-[440px] bg-cover bg-right z-20"
          style={{ backgroundImage: "url(/assets/images/hero-main-image.jpg)" }}
        ></span>
        <img
          src="/assets/images/dot-texture.png"
          alt="texture"
          className="dot-texture animate-me absolute right-[-107px] bottom-[20px] hidden xl:block"
        />
      </div>

      <span
        onClick={handleScrollDown}
        className="scroll-down animate-me absolute bottom-[110px] left-[-10px] text-sm text-[#acacac] uppercase font-roboto font-bold transform -rotate-90 cursor-pointer z-10 hidden lg:flex items-center"
      >
        scroll down <img src="/assets/images/scroll-down-arrow.png" alt="arrow" className="ml-2 w-[14px] transform rotate-90" />
      </span>

      <ul className="social-icon absolute right-4 md:right-10 bottom-10 z-20 space-y-1">
        <li><a href="https://www.facebook.com/zemichael.tefera" title="Facebook" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full text-white font-roboto flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors duration-300">FB</a></li>
        <li><a href="https://twitter.com/@zem56442751" title="Twitter" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full text-white font-roboto flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors duration-300">TW</a></li>
        <li><a href="https://www.linkedin.com/in/zemichaeltefera251" title="Linkedin" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full text-white font-roboto flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors duration-300">LI</a></li>
        <li><a href="https://www.instagram.com/themichael251/" title="Instagram" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full text-white font-roboto flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors duration-300">IG</a></li>
      </ul>

      <div className="container mx-auto px-4 relative z-20">
        <div className="content-wrapper">
          <div className="hero-content text-left">
            <h1 className="animate-me text-5xl sm:text-7xl md:text-8xl lg:text-[142px] leading-none text-white font-futura-bold inline-block ml-[-4px] md:ml-[-10px]"
                style={{ backgroundImage: "url(/assets/images/hero-title-pattern-background.png)", backgroundRepeat: "no-repeat", backgroundPosition: "95% center", backgroundSize: "contain" }}
            >
              Hi! I’m Zemu
            </h1>
            <h2 className="animate-me text-2xl sm:text-3xl lg:text-4xl text-white font-futura-medium mt-4 md:mt-5"
            >
              Computer Scientist and Full-stack Developer
            </h2>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); const contact = document.getElementById("contact"); if(contact) contact.scrollIntoView({behavior: "smooth"});}}
              className="hire-me link-default animate-me inline-flex items-center text-white font-futura-medium mt-8 md:mt-10 group"
            >
              Contact Me
              <span className="ml-2 w-[53px] h-[53px] bg-brand-red rounded-full flex items-center justify-center transition-all duration-300 group-hover:animate-button-pulse">
                <img src="/assets/images/arrow-right-white.png" alt="arrow" className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
