export interface Skill {
  title: string;
  description: string;
}

export const skills: Skill[] = [
  {
    title: 'Languages',
    description: 'Python, JavaScript, TypeScript, HTML5, CSS3, Golang, PHP',
  },
  {
    title: 'Frameworks & Libraries',
    description: 'React, Next.js, Tailwind CSS, Bootstrap, Flutter',
  },
  {
    title: 'Backend & Systems',
    description: 'RESTful APIs, PostgreSQL, MySQL, JWT Auth',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Docker, Kubernetes, CI/CD (GitHub Actions), Firebase, Linux, Kafka',
  },
  {
    title: 'Tools & Platforms',
    description: 'Git, GitHub, GitLab, Figma, Vite, Prometheus, Testing, ESLint, Prettier',
  },
  {
    title: 'Concepts',
    description: 'Microservices, Event-Driven Systems, SaaS, Multi-Tenancy',
  },
];
