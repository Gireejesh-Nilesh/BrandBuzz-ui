// import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          We create <span>solutions</span> for <br /> your business
        </h1>

        <p>
          Our team keeps a keen eye on emerging trends and technologies
          to ensure your marketing campaigns remain cutting-edge.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Explore more</button>
        </div>
      </div>

      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Illustration" />
      </div>
    </section>
  );
};

export default Hero;
