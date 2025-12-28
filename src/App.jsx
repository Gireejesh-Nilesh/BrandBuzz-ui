import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from './components/Solutions'
import Agency from "./components/Agency";
import Testimonials from "./components/Testimonials";
import Footer  from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <Agency />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
