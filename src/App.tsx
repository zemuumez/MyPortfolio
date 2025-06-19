export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="p-4 bg-gray-900 text-white">My Portfolio</header>
  );
}

function HeroSection() {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
      <p className="text-lg">This is a React and Tailwind rewrite.</p>
    </section>
  );
}

export type Project = {
  title: string;
  image: string;
};

function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Sample Project',
      image: 'assets/images/portfolio11.jpg',
    },
  ];
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="border rounded p-4">
            <img src={p.image} alt={p.title} className="mb-2" />
            <h3 className="font-semibold">{p.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills: string[] = ['React', 'TypeScript', 'Tailwind'];
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <li key={s} className="px-3 py-1 bg-gray-200 rounded-full">{s}</li>
        ))}
      </ul>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <p>Add your blog posts here.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-white text-center">\u00a9 2024 My Portfolio</footer>
  );
}
