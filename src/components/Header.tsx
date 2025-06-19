const Header = () => (
  <header className="fixed w-full bg-white shadow z-10">
    <div className="container mx-auto flex items-center justify-between p-4">
      <a href="#" className="font-bold text-xl">Zemu</a>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#skills" className="hover:underline">Skills</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
