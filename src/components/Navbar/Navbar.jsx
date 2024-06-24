"use client";
import React, { useState } from 'react'
import style from './Navbar.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!isOpen);
    };
  return (
    <div className={style.navbar_main}>
    <div className={style.navbar}>
    <div className={style.hamburger} onClick={handleToggle}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
        <div className={style.navbar_img}> 
           <img src="/logo.png" alt="" />
        </div>
        <div className={style.navbar_contents}>
          <div className={`${style.navbar_list} ${isOpen ? style.toggled : ''}`}>
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div className={style.navbar_icons}>
            <span><FaFacebookF size={14}/></span>
            <span> <FaInstagram size={14}/></span>
            <span> <FaTwitter size={14}/></span>
            <span><FaYoutube size={14}/></span>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar