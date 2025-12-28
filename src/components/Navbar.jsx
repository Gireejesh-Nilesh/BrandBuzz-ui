const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🧡</span>
        <h1>BrandBuzz</h1>
      </div>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
        <li>Blog</li>
      </ul>

      <button className="btn-primary">Sign Up</button>
    </nav>
  );
};

export default Navbar;
