export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-circle">●</span>
          <span className="logo-text">studio</span>
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn-primary">Get Started</button>
      </div>
    </header>
  )
}
