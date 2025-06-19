import { projects } from '../data/projects';

const ProjectsSection = () => (
  <section id="projects" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-50 rounded shadow overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <span className="text-xs uppercase text-gray-500">{project.type}</span>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" className="text-blue-600 text-sm hover:underline">View Live</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
