import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {ThemeProvider} from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 ">
          <Header />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
