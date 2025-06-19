import React from "react";

const Header: React.FC = () => (
  <header className="w-full py-4 px-8 bg-white shadow flex justify-between items-center">
    <div className="text-2xl font-bold text-gray-900">MyPortfolio</div>
    <nav className="space-x-6">
      <a
        href="#projects"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        Projects
      </a>
      <a
        href="#skills"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        Skills
      </a>
      <a href="#blogs" className="text-gray-700 hover:text-blue-600 transition">
        Blogs
      </a>
      <a
        href="#contact"
        className="text-gray-700 hover:text-blue-600 transition"
      >
        Contact
      </a>
    </nav>
  </header>
);

export default Header;
