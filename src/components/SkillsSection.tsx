import { skills } from '../data/skills';

const SkillsSection = () => (
  <section id="skills" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.title} className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-700 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
