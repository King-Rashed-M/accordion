import React, { useState } from "react";
import Image1 from "./assets/Image1.jpg";
import Image2 from "./assets/Image2.jpg";
import Image3 from "./assets/Image3.jpg";
import Image4 from "./assets/Image4.jpg";
import Image5 from "./assets/Image5.jpg";
import Image6 from "./assets/Image6.jpg";
import { FaCamera } from "react-icons/fa6";
import "./styles.css";

const cards = [
  {
    header: "زمستان میهنم",
    image: Image1,
    text: "منظره زیبا از یکی از ولایت های جنوب کشور",
  },
  {
    header: "بامیان زیبا",
    image: Image2,
    text: "بند امیر ُ منظره طبیعی با آرامش واقعی",
  },
  {
    header: "زندگی در قریه",
    image: Image3,
    text: "زندگی ساده و فارغ از آلایش ",
  },
  {
    header: "موجودی به اسم پدر",
    image: Image4,
    text: "نمادی از حمایت و عشق بدون قید و شرط",
  },
  {
    header: "هرات باستان",
    image: Image5,
    text: "مسجد جامع با شکوه و نماد معماری اسلامی",
  },
  {
    header: "کابل زیبا",
    image: Image6,
    text: "عصر دلنگیز کابل  با نمای کوه تلویزیون",
  },
  //more cards
];

export default function Accordion() {
  const [active, setActive] = useState(0);

  return (
    <section>
      {cards.map((card, index) => (
        <article
          key={card.image}
          className={active === index ? "active" : ""}
          onClick={() => setActive(index)}
        >
          <img src={card.image} alt={card.text} />
          <div className="content">
            <span>
              <FaCamera />
            </span>
            <div>
              <h2>{card.header}</h2>
              <p>{card.text}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
