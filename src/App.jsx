import { useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import SocialLinks from "./Components/SocialLinks";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onEnter={() => setLoading(false)} />
      ) : (
        <>
          <>
            <Header />
            <Hero />
             <hr className="section-line" />
            <About />
            <hr className="section-line" />

            <Skills />
             <hr className="section-line" />
            <SocialLinks />
            <hr className="section-line" />
             <Project/>
             <hr className="section-line" />
            <Contact/>
            
             <Footer />
          </>
        </>
      )}
    </>
  );
}

export default App;