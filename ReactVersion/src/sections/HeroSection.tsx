import React from "react";

const HeroSection: React.FC = () => (
  <section className="flex flex-col items-center justify-center min-h-[60vh] text-center bg-gradient-to-b from-blue-50 to-white">
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
      Hi, I'm Your Name
    </h1>
    <p className="text-lg md:text-2xl text-gray-700 mb-8">
      A passionate developer building modern web experiences.
    </p>
    <a
      href="#projects"
      className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      View My Work
    </a>
  </section>
);

export default HeroSection;
