import Image from 'next/image'
import React from 'react'
import style from "./Services.module.css"

const cardData = [
  {
    id: 1,
    imageSrc: "/card1.png",
    heading: "Personal Consultation",
    description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
  },
  {
    id: 2,
    imageSrc: "/card1.png",
    heading: "Personal Consultation",
    description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
  },
  {
    id: 3,
    imageSrc: "/card1.png",
    heading: "Personal Consultation",
    description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
  },
  {
    id: 4,
    imageSrc: "/card1.png",
    heading: "Personal Consultation",
    description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
  },
  {
    id: 5,
    imageSrc: "/card1.png",
    heading: "Personal Consultation",
    description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
  },
  {
    id: 6,
    imageSrc: "/card1.png",
    heading: "Personal Consultation",
    description: "Lorem ipsum dolor sit, amet ad enim aspernatur at, est atque",
  },
];

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.servicesheading}>
        <h1>Services</h1>
      </div>
      <div className={style.servicesdesc}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className={style.container}>
        {cardData.map(card => (
          <div key={card.id} className={style.card}>
            <div className={style.overlay1}></div>
            <div className={style.cardimage_container}>
              <Image src={card.imageSrc} alt="" width={100} height={100} />
            </div>
            <div className={style.carddetail}>
              <p className={style.cardheading}>{card.heading}</p>
              <p className={style.description}>{card.description}</p>
              <p className={style.button}>Learn More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
