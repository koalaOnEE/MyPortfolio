import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import {Hero} from "./Hero/Hero";
import {About} from "./About/About";
import {Projects} from "./Projects/Projects";
import {Contact} from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
