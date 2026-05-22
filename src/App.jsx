import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {` `}
            Navya Mani Sri Angalakuduru · React Portfolio
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
