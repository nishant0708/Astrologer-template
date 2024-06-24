import React from "react";
import style from "./Booking.module.css";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
const Booking = () => {
  return (
    <section className={style.booking_main}>
        <div>
        <div className={style.imagecontainer}>
          <Image src="/booking-background.jpg" alt="Background" fill />
          <div className={style.backgroundoverlay}></div>
        </div>
        
        </div>
        
      <div className={style.booking}>
        
       
        <div className={style.gitcontainer}>
          <div className={style.gitform_container}>
            <div className={style.gitform_heading}>
              <h1>Get In Touch</h1>
            </div>
            <div className={style.gitform_description}>
              <p>
                Don&apos;t hesitate to get in touch if you have any questions,
                need further assistance, or would like more information.
                We&apos;re here to help!{" "}
              </p>
            </div>
            <div className={style.gitform}>
              <div className={style.gitforminput}>
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className={style.gitforminput}>
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className={style.gitforminput}>
                <label>Message</label>
                <textarea placeholder="Message" />
              </div>
              <button>Register Now</button>
            </div>
          </div>
          <div className={style.gitform_container_right}>
            <div className={style.gitform_right_heading}>
              <p>Contact Details</p>
            </div>
            <div className={style.gitform_right_description}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate ut voluptate accusantium
              </p>
            </div>
            <div className={style.contact_card_detail_container}>
              <div className={style.contact_card}>
                <div className={style.contact_card_icon}>
                  <IoMdCall />
                </div>

                <div className={style.contact_card_detail}>
                  <h1>Mobile No.</h1>
                  <p>9868708654</p>
                </div>
              </div>
              <div className={style.contact_card}>
                <div className={style.contact_card_icon}>
                  <MdOutlineEmail />
                </div>
                <div className={style.contact_card_detail}>
                  <h1>Email</h1>
                  <p>Example@gmail.com</p>
                </div>
              </div>
              <div className={style.contact_card}>
                <div className={style.contact_card_icon}>
                  <IoLocationOutline />
                </div>
                <div className={style.contact_card_detail}>
                  <h1>Address</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis laborum ducimus, recusandae unde mo{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
