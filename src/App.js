import Topbar from "./components/Topbar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro></Intro>
          <Portfolio></Portfolio>
          <Works></Works>
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
