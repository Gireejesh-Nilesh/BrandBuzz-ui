const services = [
  {
    title: "Seo/Sem",
    desc:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "yellow",
    icon: "🔍",
  },
  {
    title: "Marketing",
    desc:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "green",
    icon: "📣",
  },
  {
    title: "Viral Campaign",
    desc:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "purple",
    icon: "📈",
  },
  {
    title: "Others",
    desc:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s",
    color: "red",
    icon: "📄",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>
          We Provide The Best <span>Services</span>
        </h2>
        <p>
          Let us unleash the full potential of your business with our
          data-driven strategies
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className={`icon-box ${service.color}`}>
              <span>{service.icon}</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href="#">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
