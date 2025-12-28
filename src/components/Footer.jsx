const Footer = () => {
  return (
    <footer className="footer">
      {/* CTA */}
      <div className="footer-cta">
        <h3>Ready to get started?</h3>
        <button className="btn-outline-light">Contact Us</button>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🧡</span>
            <h2>BrandBuzz</h2>
          </div>

          <div className="socials">
            <a href="#"><i class="ri-facebook-line"></i></a>
            <a href="#"><i class="ri-instagram-line"></i></a>
            <a href="#"><i class="ri-twitter-fill"></i></a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
          <a href="#">Team</a>
        </div>

        {/* Designs */}
        <div className="footer-links">
          <h4>Designs</h4>
          <a href="#">Design contests</a>
          <a href="#">1-to-1 Projects</a>
          <a href="#">Find a designer</a>
          <a href="#">Discover inspiration</a>
          <a href="#">Pricing</a>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4>Resources</h4>
          <a href="#">Become a designer</a>
          <a href="#">Blog</a>
          <a href="#">Design without borders</a>
          <a href="#">99awards</a>
          <a href="#">Affiliates</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>All rights reserved © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
