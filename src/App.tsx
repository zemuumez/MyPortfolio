import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
