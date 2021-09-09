import "./works.scss";
import { useState } from "react";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://i.pinimg.com/originals/54/83/66/54836690d692d938738f86462738cf4d.png",
      title: "Arquitetura",
      desc: "O projeto arquitetônico é o esboço do projeto, essencial para qualquer edificação.",
      img: "https://www.suaobra.com.br/img/not/B5oPtxaEjd.jpeg",
    },
    {
      id: "2",
      icon: "./assets/paisagismo.png",
      title: "Paisagismo",
      desc: "A arquitetura da paisagem ou paisagismo, é um complemento ao projeto arquitetônico, que visa harmonizar a paisagem.",
      img: "http://www.gingaimoveis.com.br/blog/wp-content/uploads/2019/02/273728-conheca-as-tendencias-de-paisagismo-para-casa-em-2019.jpg",
    },
    {
      id: "3",
      icon: "./assets/ambientacao.png",
      title: "Ambientação",
      desc: "Planejar e organizar espaços, combinando os elementos de um ambiente, estabelecendo relações estéticas e funcionais.",
      img: "https://www.tecnicageracao.com.br/wp-content/uploads/2020/05/post-blog-habilidades-tecnico-design-interiores.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)

    console.log(way)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={()=>handleClick("left")}
      />
      <img
        src="https://raw.githubusercontent.com/safak/youtube/react-portfolio/public/assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={()=>handleClick("right")}
      />
    </div>
  );
}
