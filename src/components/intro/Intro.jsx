import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Guitares", "Basses", "Ukulélés", "Violons"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/rocker.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Bienvenue chez</h2>
          <h1>Emma Musik</h1>
          <h3>
            Atelier de lutherie : <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
