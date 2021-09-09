import "./portfolio.scss";
import PortfolioList from "./portfolioList";
import { useState, useEffect } from "react";
import { ambientacaoPort, arquiteturaPort, paisagismoPort } from "../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("arquitetura");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "arquitetura",
      title: "Arquitetura",
    },
    {
      id: "paisagismo",
      title: "Paisagismo",
    },
    {
      id: "ambientacao",
      title: "Ambientação",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "arquitetura":
        setData(arquiteturaPort);
        break;
      case "paisagismo":
        setData(paisagismoPort);
        break;
      case "ambientacao":
        setData(ambientacaoPort);
        break;
      default:
        setData(arquiteturaPort);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfólio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}