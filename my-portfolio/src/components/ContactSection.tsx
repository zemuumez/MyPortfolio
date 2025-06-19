import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="footer-area bg-cover bg-center" style={{ backgroundImage: "url(/assets/images/service-background.jpg)"}}>
      <div className="contact-section py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-12 md:mb-16">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-red mx-auto mb-4" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"/>
            </svg>
            <h2 className="text-3xl md:text-4xl text-white font-futura-bold uppercase tracking-wider">get in touch</h2>
          </div>
          <div className="content-wrapper flex flex-col md:flex-row max-w-4xl mx-auto">
            <div className="address-area md:w-1/2 md:pr-8 mb-10 md:mb-0">
              <address className="not-italic">
                <span className="label address-label block text-sm text-gray-400 font-roboto font-bold uppercase tracking-wider mb-2 animate-me">address :</span>
                <p className="address text-lg text-white font-futura-book mb-6 animate-me">
                  1000 Ethiopia, Addis-Ababa, TN, ------
                </p>
                <span className="label email-label block text-sm text-gray-400 font-roboto font-bold uppercase tracking-wider mb-2 animate-me">E-mail :</span>
                <a href="mailto:themickmay15@gmail.com" className="email text-lg text-brand-red font-futura-book hover:underline animate-me">
                  themickmay15@gmail.com
                </a>
              </address>
            </div>
            <div className="contact-form md:w-1/2 md:pl-8">
              <form onSubmit={handleSubmit}>
                <div className="input-group name mb-6 animate-me">
                  <label htmlFor="name" className="block text-xs text-gray-500 font-roboto mb-1">name *</label>
                  <input
                    type="text" name="name" id="name" placeholder="Your Name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#333] text-white py-2 focus:outline-none focus:border-brand-red transition-colors duration-300" />
                </div>
                <div className="input-group email mb-6 animate-me">
                  <label htmlFor="email" className="block text-xs text-gray-500 font-roboto mb-1">email *</label>
                  <input
                    type="email" name="email" id="email" placeholder="Your Email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#333] text-white py-2 focus:outline-none focus:border-brand-red transition-colors duration-300" />
                </div>
                <div className="input-group msg mb-6 animate-me">
                  <label htmlFor="message" className="block text-xs text-gray-500 font-roboto mb-1">message *</label>
                  <textarea
                    name="message" id="message" rows={4} placeholder="Write your message" required
                    value={formData.message} onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#333] text-white py-2 focus:outline-none focus:border-brand-red transition-colors duration-300 resize-none"></textarea>
                </div>
                <div className="input-group submit text-left animate-me">
                  <button type="submit" className="btn-default bg-brand-red text-white font-futura-medium uppercase py-3 px-8 rounded-sm hover:bg-red-700 transition-colors duration-300">
                    send here
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
