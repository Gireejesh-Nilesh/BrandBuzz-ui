import { useRef } from "react";

const testimonials = [
  {
    name: "John Khan",
    role: "Executive CEO",
    text:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Kashley June",
    role: "Executive CEO",
    text:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    rating: 3,
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Yuan Wei",
    role: "Executive CEO",
    text:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Maria Lopez",
    role: "Executive CEO",
    text:
      "Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>
          What <span>Clients</span> Say!
        </h2>
        <p>
          See How Our Digital Marketing Agency Helped Clients Achieve Their Goals
        </p>
      </div>

      <div className="testimonial-wrapper">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="client">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>

              <p className="review">{t.text}</p>

              <div className="stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span
                    key={idx}
                    className={idx < t.rating ? "filled" : ""}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
