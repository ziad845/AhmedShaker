import { useEffect, useState } from "react";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Services from "./Components/services/Services";
import Skills from "./Components/skills/Skills";
import Main from "./Components/main/Main";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  const [showscroll, setShowscroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowscroll(true);
      } else {
        setShowscroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="up" className="container">
      <Header />

      <Hero />

      <div className="divider" />

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      <div className="divider" />

      {/* Skills Section */}
      <div id="skill">
        <Skills />
      </div>

      <div className="divider" />

      {/* Projects Section */}
      <div id="projects">
        <Main />
      </div>

      <div className="divider" />

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      <div className="divider" />

      <Footer />

      {/* Scroll To Top Button */}
      <a
        href="#up"
        style={{
          opacity: showscroll ? 1 : 0,
          transition: "0.5s",
        }}
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;