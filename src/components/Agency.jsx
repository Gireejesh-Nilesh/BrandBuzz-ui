// import agencyImg from "../assets/agency.png";

const Agency = () => {
  return (
    <section className="agency">
      <div className="agency-container">
        {/* Left Content */}
        <div className="agency-content">
          <h2>
            Our <span>Agency</span>
          </h2>

          <p>
            We believe in the power of data. Our analytics-driven approach
            allows us to make informed decisions and optimize your marketing
            efforts for maximum ROI.
          </p>

          <p>
            Let's turn your data into actionable insights. Tailored solutions
            for your business.
          </p>

          <button className="btn-primary">Read more</button>
        </div>

        {/* Right Image */}
        <div className="agency-image">
          <img
            src="https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Agency Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Agency;
