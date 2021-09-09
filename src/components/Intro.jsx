import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["arquiteta", "paisagista", "designer de interiores"],
    });

  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/perfilDora.png" alt="Perfil" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Olá, me chamo</h1>
          <h2>Dora Maia</h2>
          <h3>
            Sou <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="Seta" />
        </a>
      </div>
    </div>
  );
}
