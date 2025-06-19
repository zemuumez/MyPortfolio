import React from "react";

const instagramImages = {
  smCol: [
    { src: "/assets/images/instagram-graduation-photo.jpg", alt: "Instagram graduation photo" },
    { src: "/assets/images/testimonial-author-3.jpg", alt: "Instagram image 3" },
  ],
  mdCol: [
    { src: "/assets/images/instagram-image-2.jpg", alt: "Instagram image" },
    { src: "/assets/images/instagram-pic-1.jpg", alt: "Instagram pic 1" },
  ],
  lgCol: [
    { src: "/assets/images/instagram-image-1.jpg", alt: "Instagram image" },
  ],
};

const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="instagram-section relative py-20 md:py-28 bg-[#141519] overflow-hidden">
      <img src="/assets/images/instagram-shape.png" alt="shape" className="insta-shape absolute right-[-80px] top-[120px] z-0 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="section-title text-center mb-12 md:mb-16">
          <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-red mx-auto mb-4" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
          <h2 className="text-3xl md:text-4xl text-white font-futura-bold uppercase tracking-wider">Instagram</h2>
        </div>

        <div className="instagram-img-wrapper flex flex-col sm:flex-row gap-3 md:gap-5 px-0 md:px-2 lg:px-6">
          <div className="single-col sm-col flex sm:flex-col gap-3 md:gap-5 w-full sm:w-1/4">
            {instagramImages.smCol.map((image, index) => (
              <a href="#" key={`sm-${index}`} className="block overflow-hidden rounded-sm shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform hover:scale-105" />
              </a>
            ))}
          </div>
          <div className="single-col md-col flex sm:flex-col gap-3 md:gap-5 w-full sm:w-1/2">
            {instagramImages.mdCol.map((image, index) => (
              <a href="#" key={`md-${index}`} className="block overflow-hidden rounded-sm shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform hover:scale-105" />
              </a>
            ))}
          </div>
          <div className="single-col lg-col flex sm:flex-col gap-3 md:gap-5 w-full sm:w-1/4 pt-0 sm:pt-10 lg:pt-16">
            {instagramImages.lgCol.map((image, index) => (
              <a href="#" key={`lg-${index}`} className="block overflow-hidden rounded-sm shadow-lg">
                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
