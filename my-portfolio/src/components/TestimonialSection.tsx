import React, { useRef } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    quote:
      "Zemichaels problem-solving skills and deep expertise consistently impressed us.",
    authorName: "Samuel Geremew",
    authorDesignation: "CEO at Samilos media and communication",
    authorImage: "/assets/images/testimonial-author-samuel-geremew.jpg",
  },
];

const TestimonialSection: React.FC = () => {
  const textSlider = useRef<Slider | null>(null);
  const authorSlider = useRef<Slider | null>(null);

  const settingsText = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 500,
    asNavFor: authorSlider.current ?? undefined,
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8">
        <ul className="m-0 p-0 flex justify-center space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <button className="w-3 h-3 bg-gray-700 rounded-full focus:outline-none hover:bg-gray-500 transition-colors duration-300 slick-active:bg-brand-red"></button>
    ),
  };

  const settingsAuthorImages = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: textSlider.current ?? undefined,
    dots: false,
    arrows: false,
    fade: true,
    speed: 1500,
  };

  return (
    <section
      id="testimonials"
      className="testimonial-section relative py-20 md:py-28 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url(/assets/images/testimonial-background.jpg)",
      }}
    >
      <div className="overlay absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <div className="testimonial-wrapper text-center">
          <Slider
            {...settingsText}
            className="testimonial-text-slider mb-12"
            ref={textSlider}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="single-testimonial-slide outline-none focus:outline-none pt-16 md:pt-24"
              >
                <img
                  src="/assets/images/testimonial-quote.png"
                  alt="quote"
                  className="quote absolute left-1/2 top-0 transform -translate-x-1/2 h-16 md:h-24 opacity-50"
                />
                <h2 className="text-2xl md:text-3xl lg:text-4xl italic text-white font-futura-medium leading-relaxed max-w-3xl mx-auto">
                  {testimonial.quote}
                </h2>
                <h5 className="author mt-6 md:mt-8">
                  <a
                    href="#"
                    target="_blank"
                    title="View Author Info"
                    className="text-lg md:text-xl text-brand-red font-bold font-roboto hover:underline"
                  >
                    {testimonial.authorName}
                  </a>
                  <span className="desgination block text-sm md:text-base text-brand-red font-roboto">
                    {testimonial.authorDesignation}
                  </span>
                </h5>
              </div>
            ))}
          </Slider>
          <div className="author-img-wrapper relative mx-auto mt-8 md:mt-12 w-40 h-40 md:w-48 md:h-48">
            <img
              src="/assets/images/testimonial-curve.png"
              alt="curve"
              className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[1100px] max-w-[200%] opacity-30"
              style={{ maxWidth: "calc(100% + 200px)" }}
            />
            <Slider
              {...settingsAuthorImages}
              className="testimonial-author-slider"
              ref={authorSlider}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="author-slide outline-none focus:outline-none"
                >
                  <img
                    src={testimonial.authorImage}
                    alt={testimonial.authorName}
                    className="author-img rounded-full h-32 w-32 md:h-40 md:w-40 border-2 border-dashed border-gray-600 p-2 mx-auto object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
