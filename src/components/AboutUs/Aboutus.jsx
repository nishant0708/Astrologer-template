import React from 'react';
import style from './Aboutus.module.css';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <div className={style.aboutus_main}>
    <div className={style.aboutus}>
      <div className={style.background}>
        <Image src="/img_1.png" alt="background" className={style.background_img} width={400} height={400} />
        <div className={style.overlay}></div>
      </div>
      <div className={style.content}>
        <div className={style.imgcontainer}>
          <Image src="/aboutus.jpg" alt="about us" className={style.about_img} width={400} height={400} />
        </div>
        <div className={style.aboutcontent}>
          <h1>Astrology is just a finger pointing at reality.</h1>
          <p>Mus vehicula dictumst mi sed libero himenaeos pede. Leo nibh tempus nunc elementum integer lacus ultrices. Himenaeos fermentum purus euismod placerat quisque luctus metus ornare nam rutrum potenti.</p>
          <p>Mus vehicula dictumst mi sed libero himenaeos pede. Leo nibh tempus nunc elementum integer lacus ultrices. Himenaeos fermentum purus euismod placerat quisque luctus metus ornare nam rutrum potenti.</p>
          <button>Discover More</button>
        </div>
      </div>
    </div></div>
  );
}

export default Aboutus;
