export default function App() {
    return (React.createElement("div", { className: "font-sans" },
        React.createElement(Header, null),
        React.createElement(HeroSection, null),
        React.createElement(ProjectsSection, null),
        React.createElement(SkillsSection, null),
        React.createElement(BlogSection, null),
        React.createElement(Footer, null)));
}
function Header() {
    return (React.createElement("header", { className: "p-4 bg-gray-900 text-white" }, "My Portfolio"));
}
function HeroSection() {
    return (React.createElement("section", { className: "p-8 text-center" },
        React.createElement("h1", { className: "text-4xl font-bold mb-4" }, "Welcome to my Portfolio"),
        React.createElement("p", { className: "text-lg" }, "This is a React and Tailwind rewrite.")));
}
function ProjectsSection() {
    const projects = [
        {
            title: 'Sample Project',
            image: 'assets/images/portfolio11.jpg',
        },
    ];
    return (React.createElement("section", { className: "p-8 bg-gray-100" },
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Projects"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4" }, projects.map((p) => (React.createElement("div", { key: p.title, className: "border rounded p-4" },
            React.createElement("img", { src: p.image, alt: p.title, className: "mb-2" }),
            React.createElement("h3", { className: "font-semibold" }, p.title)))))));
}
function SkillsSection() {
    const skills = ['React', 'TypeScript', 'Tailwind'];
    return (React.createElement("section", { className: "p-8" },
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Skills"),
        React.createElement("ul", { className: "flex flex-wrap gap-2" }, skills.map((s) => (React.createElement("li", { key: s, className: "px-3 py-1 bg-gray-200 rounded-full" }, s))))));
}
function BlogSection() {
    return (React.createElement("section", { className: "p-8 bg-gray-100" },
        React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Blog"),
        React.createElement("p", null, "Add your blog posts here.")));
}
function Footer() {
    return (React.createElement("footer", { className: "p-4 bg-gray-900 text-white text-center" }, "\\u00a9 2024 My Portfolio"));
}
