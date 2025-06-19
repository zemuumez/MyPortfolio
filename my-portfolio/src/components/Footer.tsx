import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-8 text-center">
      <div className="container mx-auto">
        {/* Placeholder for social media icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/zemichael.tefera" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Facebook</a>
          <a href="https://twitter.com/@zem56442751" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Twitter</a>
          <a href="https://www.linkedin.com/in/zemichaeltefera251" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">LinkedIn</a>
          <a href="https://www.instagram.com/themichael251/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Instagram</a>
        </div>
        <p>&copy; {currentYear} Developed By Zemichael Tefera. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
