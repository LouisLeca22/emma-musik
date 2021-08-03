import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  classiquePortfolio,
  elecPortfolio,
  bassePortfolio,
  ukulelePortfolio,
  violonPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("classique");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "classique",
      title: "Classique",
    },
    {
      id: "elec",
      title: "Elec'",
    },
    {
      id: "basse",
      title: "Basse",
    },
    {
      id: "ukulele",
      title: "Ukulélé",
    },
    {
      id: "violon",
      title: "Violon",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "classique":
        setData(classiquePortfolio);
        break;
      case "elec":
        setData(elecPortfolio);
        break;
      case "basse":
        setData(bassePortfolio);
        break;
      case "ukulele":
        setData(ukulelePortfolio);
        break;
      case "violon":
        setData(violonPortfolio);
        break;
      default:
        setData(classiquePortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Créations</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
