import React from "react";

interface SkillItemProps {
  title: string;
  description: string;
  isOdd: boolean; // To alternate alignment
}

const SkillItem: React.FC<SkillItemProps> = ({ title, description, isOdd }) => {
  const alignmentClass = isOdd ? "md:text-right md:pr-[calc(50%+30px)]" : "md:text-left md:pl-[calc(50%+30px)]";
  const itemWrapperClass = isOdd ? "md:justify-start" : "md:justify-end";
  const circlePosClass = isOdd ? "md:left-[calc(50%-9px)]" : "md:right-[calc(50%-9px)]";

  return (
    <div className={`single-skill mb-10 md:mb-0 md:w-1/2 p-4 relative flex ${itemWrapperClass}`}>
      <div className={`bg-[#1c1d21] border border-[#26272d] rounded-md p-4 md:p-6 shadow-lg w-full md:max-w-md ${alignmentClass} relative z-10`}>
        <h3 className="text-xl lg:text-2xl text-white font-futura-medium mb-2 relative">
          <span className="title">{title}</span>
        </h3>
        <p className="text-[#acacac] font-futura-book text-sm lg:text-base leading-relaxed">{description}</p>
        <span className={`circle hidden md:block w-[18px] h-[18px] bg-brand-red rounded-full absolute top-1/2 -translate-y-1/2 ${circlePosClass} z-20 shadow-[0_0_0_8px_#333]`}></span>
      </div>
    </div>
  );
};

const skillsData = [
  { title: "Languages", description: "Python, JavaScript, TypeScript, HTML5, CSS3, Golang, PHP" },
  { title: "Frameworks & Libraries", description: "React, Next.js, Tailwind CSS, Bootstrap, Flutter" },
  { title: "Backend & Systems", description: "RESTful APIs, PostgreSQL, MySQL, JWT Auth" },
  { title: "DevOps & Cloud", description: "Docker, Kubernetes, CI/CD (GitHub Actions), Firebase, Linux, Kafka" },
  { title: "Tools & Platforms", description: "Git, GitHub, GitLab, Figma, Vite, Prometheus, Testing & Quality, React Testing Library, ESLint, Prettier" },
  { title: "Concepts", description: "Microservices, Event-Driven Systems, SaaS, Multi-Tenancy" },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skill" className="skill-section relative py-20 md:py-28 bg-[#16171b] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="section-title text-center text-5xl md:text-7xl lg:text-[140px] font-bold mb-12 md:mb-20 text-[#16171b]"
          style={{ textShadow: "-1px -1px 0 #26272d, 1px -1px 0 #26272d, -1px 1px 0 #26272d, 1px 1px 0 #26272d" }}
        >
          My Skills
        </h2>

        <div className="skill-wrapper relative flex flex-wrap justify-center md:justify-between items-start">
          <div className="vertical-line hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-brand-red transform -translate-x-1/2">
            <span className="absolute w-4 h-4 bg-brand-red rounded-full left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2"></span>
            <span className="absolute w-4 h-4 bg-brand-red rounded-full left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"></span>
          </div>

          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              title={skill.title}
              description={skill.description}
              isOdd={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
