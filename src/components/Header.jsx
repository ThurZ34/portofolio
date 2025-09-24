import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="logo">Thur</div>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
