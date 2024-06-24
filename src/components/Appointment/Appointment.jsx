import Image from 'next/image'
import React from 'react'
import style from "./Appointment.module.css"

const Appointment = () => {
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
        Lorem ipsum dolor sit akndak k wijdwo oap adjaiosjo
       </div>
       <div className={style.cardcontainer}>
        <div className={style.card}>
           <div className={style.cardBackground}>
             <Image 
               src="/cardbackground.png" 
               alt="Card Background" 
               layout="fill" 
               objectFit="cover" 
             />
           </div>
           <div 
           <div className={style.cardContent}>
             <p>Monday</p> 
             <p>9:00 AM - 11:00 PM</p>
           </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Appointment
