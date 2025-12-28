// import solutionImg from "../assets/solution.png";

const steps = [
  {
    id: 1,
    title: "Contact us",
    desc: "Contact us to boost your brand visibility",
  },
  {
    id: 2,
    title: "Consult",
    desc: "Always available to answer your questions",
  },
  {
    id: 3,
    title: "Place order",
    desc: "Buy our package today to proceed",
  },
  {
    id: 4,
    title: "Payment",
    desc: "We receive payments in all types of banking",
  },
];

const Solutions = () => {
  return (
    <section className="solutions">
      <div className="solutions-container">
        {/* Left Image */}
        <div className="solutions-image">
          <img src='https://plus.unsplash.com/premium_photo-1682309735318-934795084028?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Solutions Illustration" />
        </div>

        {/* Right Content */}
        <div className="solutions-content">
          <h2>
            Simple <span>Solutions!</span>
          </h2>

          <p className="solutions-desc">
            We understand that no two businesses are alike. That's why we take
            the time to understand
          </p>

          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.id}>
                <div className="step-number">{step.id}</div>
                <div className="step-text">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="solutions-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
