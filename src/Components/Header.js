import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import food from './banner.jpg'

import {Link} from "react-router";
import bg1 from './BG/477.jpg';
import bg2 from './BG/1339.jpg';
import bg3 from './BG/food_web_banner_29.jpg';
import bg4 from './BG/food_web_banner_36.jpg';
import bg5 from './BG/Food-Facebook-Banner-01.jpg';
import bg6 from './BG/food-facebook-cover-14.jpg';
import bg7 from './BG/food-facebook-cover-20.jpg';
import bg8 from './BG/Food-Facebook-Cover-Banner-08.jpg';
import bg9 from './BG/Food-Facebook-Cover-Banner-19.jpg';
import bg10 from './BG/Ramadan-Kareem-Facebook-Cover-45.jpg';

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8,bg9,bg10];


const Header = () => {
    
     const [btnameReact,setbtnameReact]= useState("Login");
     const [bgIndex, setBgIndex] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); 

        return () => clearInterval(interval); 
    }, []);
    const scrollToFooter = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
        <div
            className="relative shadow-lg"
            style={{
                backgroundImage: `url(${images[bgIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "700px",  
                color: "white",  
                transition: "background-image 1s ease-in-out",
            }}
        >
             <div
        style={{
          position: "absolute",
          top: "20px",  
          left: "20px", 
          zIndex: 10,   
        }}
      >
        
      </div>
      <div className="absolute top-7 right-4">
  <ul className="flex space-x-4 items-center text-3xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
    <li className="hover:underline cursor-pointer"> <Link to="/">Home</Link></li>
    <li className="hover:underline cursor-pointer" ><Link to="/about">About us</Link></li>
    <li className="hover:underline cursor-pointer" onClick={scrollToFooter}>Contact us</li>
    
    <button
      className="rounded-2xl text-white font-semibold border border-white hover:bg-white hover:text-black transition"
      onClick={() =>
        setbtnameReact(btnameReact === "Login" ? "Logout" : "Login")
      }
      style={{
        padding: "5px 10px",
        cursor: "pointer",
      }}
    >
      {btnameReact}
    </button>
  </ul>
</div>

           
        </div>
    )
}

export default Header;