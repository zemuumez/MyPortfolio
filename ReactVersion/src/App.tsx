import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        {/* Add ProjectsSection, SkillsSection, BlogsSection, etc. here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
