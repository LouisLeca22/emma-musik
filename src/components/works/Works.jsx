import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/diagnostic.png",
      title: "Rèvision",
      desc:
        "Diagnostic de votre instrument, nettoyage complet, réglage général, optimisation des capacités, frettage, câblage, changement de micros...",
      img:
        "./assets/slide1.jpg",
      price: 
        "70€ pour un diagnostic standard"
    },
    {
      id: "2",
      icon: "./assets/repair.png",
      title: "Restauration",
      desc:
        "Réparation de votre instrument en respectant son intégrité esthétique et acoustique: confection de vernis, remise en voûte de table, doublure des parties faibles...",
      img:
        "./assets/slide2.jpg",
      price:
        "A partir de 150€ pour les interventiosn courantes"
    },
    {
      id: "3",
      icon: "./assets/craft.png",
      title: "Fabrication",
      desc:
        "Fabrication artisinale d'instruments sur mesure. Création de modèles originaux avec une finition unique pour un instrument qui vous ressemble. ",
      img:
        "./assets/slide3.jpg",
      price:
        "2500€ pour modèle de base avec fond et éclisses en acajou"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>{d.price}</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
