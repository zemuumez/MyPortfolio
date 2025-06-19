import React from "react";
// ... other imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import BlogSection from "./components/BlogSection";
import InstagramSection from "./components/InstagramSection";
import ContactSection from "./components/ContactSection";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  // const sections = []; // All sections are now components
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <SkillsSection />
        <ServicesSection />
        <TestimonialSection />
        <BlogSection />
        <InstagramSection />
        <ContactSection /> {/* Add ContactSection here */}
        {/* No more placeholder sections */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
