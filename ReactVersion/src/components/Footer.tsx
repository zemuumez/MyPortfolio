import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full py-6 px-8 bg-gray-900 text-gray-300 text-center mt-12">
    <span>
      &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
    </span>
  </footer>
);

export default Footer;
