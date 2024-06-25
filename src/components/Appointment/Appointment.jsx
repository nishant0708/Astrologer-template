import Image from 'next/image'
import React from 'react'
import style from "./Appointment.module.css"

const Appointment = () => {
  const openingHoursData = [
    { day: "Sunday", open: "Closed", close: "Closed" },
    { day: "Monday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "10:00 AM", close: "5:00 PM" },
    { day: "Saturday", open: "10:00 AM", close: "5:00 PM" },
];
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image 
          src="/img_3.jpg" 
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className={style.backgroundImage}
        />
      </div>
      <div className={style.overlay}></div>
      <div className={style.bookinghrs}>
        <div className={style.bookinghrsheading}>
          Book Your Appointment Now
        </div>
        <div className={style.bookinghrssubheading}>
        Schedule your appointment today for personalized care and service!
        </div>
        <div className={style.cardcontainer}>
          {openingHoursData.map((hour, index) => (
            <div className={style.card} key={index}>
              <div className={style.cardBackground}>
                <Image 
                  src="/cardbackground.png" 
                  alt="Card Background" 
                  width={100}
                  height={100}
                />
              </div>
              <div className={style.overlay1}></div>
              <div className={style.cardContent}>
                <p className={style.day}>{hour.day}</p> 
                <p className={style.time}>
                  {hour.open === "Closed" ? "Closed" : `${hour.open} - ${hour.close}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Appointment
