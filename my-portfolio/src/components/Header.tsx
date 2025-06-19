import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "#about-me", text: "About", dataText: "about" },
    { href: "#portfolio", text: "Portfolio", dataText: "portfolio" },
    { href: "#skill", text: "Skill", dataText: "skill" },
    { href: "#blog", text: "Blog", dataText: "blog" },
    { href: "#contact", text: "Contact", dataText: "contact" },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${isSticky ? "bg-[#16171b] py-3 shadow-lg" : "bg-transparent py-8"}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <a href="#hero" onClick={() => scrollToSection("hero")}>
            <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none group">
            <div className="w-[35px] h-[25px] relative">
              <span className={`block w-full h-[3px] bg-white absolute transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}></span>
              <span className={`block h-[3px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0 w-0" : "opacity-100 w-3/5 group-hover:w-full"}`}></span>
              <span className={`block w-full h-[3px] bg-white absolute transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"}`}></span>
            </div>
          </button>
        </div>
         <nav className="hidden md:block">
            <ul className="flex space-x-4">
                {navLinks.map(link => (
                    <li key={link.dataText}>
                        <a
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.href.substring(1)); }}
                            className="text-white hover:text-brand-red font-futura-medium"
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
      </div>
      <div
        className={`menu-wrapper fixed top-0 left-0 w-full h-screen bg-[#111111] transition-opacity duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        style={{transitionDelay: isMenuOpen ? "0s" : "0.5s"}}
      >
        <ul className="main-menu absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-center">
          {navLinks.map((link, index) => (
            <li
              key={link.dataText}
              className="mb-2"
            >
              <a
                href={link.href}
                data-text={link.dataText}
                onClick={() => scrollToSection(link.href.substring(1))}
                className={`text-4xl sm:text-6xl lg:text-7xl font-futura-bold text-white relative inline-block transition-all duration-300 ease-in-out hover:text-brand-red ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"}`}
                style={{ transitionDelay: isMenuOpen ? `${0.1 * (index + 1)}s` : "0s" }}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className={`quick-link absolute right-1/2 bottom-10 transform translate-x-1/2 w-full max-w-screen-lg px-4 md:px-0 flex flex-col md:flex-row items-center justify-end text-right transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100 visible" : "translate-y-5 opacity-0 invisible"}`}
            style={{transitionDelay: isMenuOpen ? "0.4s" : "0s"}}
        >
          <div className="email mb-4 md:mb-0 md:mr-12">
            <span className="block text-sm md:text-base text-gray-400 mb-1 font-roboto">Want to talk?</span>
            <a href="mailto:themickmay15@gmail.com" className="text-base md:text-lg font-medium text-brand-red hover:underline font-roboto">
              themickmay15@gmail.com
            </a>
          </div>
          <div className="follow-me">
            <span className="block text-sm md:text-base text-gray-400 mb-1 font-roboto">Follow me :</span>
            <ul className="social-icon flex space-x-2">
              <li><a href="https://www.facebook.com/zemichael.tefera" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-roboto">FB</a></li>
              <li><a href="https://twitter.com/@zem56442751" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-roboto">TW</a></li>
              <li><a href="https://www.linkedin.com/in/zemichaeltefera251" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-roboto">LI</a></li>
              <li><a href="https://www.instagram.com/themichael251/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-roboto">IG</a></li>
            </ul>
          </div>
        </div>
        <img src="/assets/images/logo-horizontal.png" alt="Horizontal Logo" className="absolute bottom-0 right-0 opacity-20 max-w-xs md:max-w-sm" />
      </div>
    </header>
  );
};
export default Header;
