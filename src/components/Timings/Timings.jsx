import React from 'react';
import style from './timings.module.css';
import { IoFlowerOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

const Timings = () => {
  const cardData = [
    {
      heading: "Mobile",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      icon: <CiMobile3 size={40} />
    },
    {
      heading: "Email",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      icon: <MdOutlineEmail size={40} />
    },
    {
      heading: "Location",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      icon: <FaLocationArrow size={36} />
    }
  ];

  return (
    <div className={style.timings_main}>
    <div className={style.timings}>
      <div className={style.card_container}>
        {cardData.map((card, index) => (
          <div key={index} className={style.card}>
            <div className={style.image_container}>
              {card.icon}
            </div>
            <div className={style.carddetail}>
              <p className={style.cardheading}>{card.heading}</p>
              <p className={style.carddescription}>{card.description}</p>
              <p className={style.cardbutton}>Learn more</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Timings;
