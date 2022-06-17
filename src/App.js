import { useState } from 'react';
import './App.css';
import Navbar from "./Components/navbar/Navbar.jsx"
import Testimonial from "./Components/testimonial/Testimonial.jsx"
import Intro from "./Components/intro/Intro.jsx"
import Slider from "./Components/slider/Slider.jsx"
import Contact from "./Components/contact/Contact.jsx"
import Sidebar from './Components/sidebar/Sidebar';
import Portfolio from './Components/portfolio/Portfolio.jsx';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Slider />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
