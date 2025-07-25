import './App.css'
import Header from "./components/Header/Header.tsx";
import './styles/main.scss';
import Projects from "./components/Projects/Projects.tsx";
import Hero from "./components/Header/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App
