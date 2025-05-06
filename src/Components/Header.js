import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";


import {Link} from "react-router";


const bg1 = 'https://i.postimg.cc/sX5vhwKg/477.jpg';
const bg2 ='https://i.postimg.cc/2yBThpMB/1339.jpg';
const bg3 ='https://i.postimg.cc/fRZnz5Sv/banner.jpg';
const bg4 ='https://i.postimg.cc/k5X084c6/food-web-banner-29.jpg';
const bg5 ='https://i.postimg.cc/GhFV5YgT/food-web-banner-36.jpg';
const bg6 ='https://i.postimg.cc/TY6Hg12d/Food-Facebook-Banner-01.jpg';
const bg7 ='https://i.postimg.cc/ZKxscm0r/food-facebook-cover-14.jpg';
const bg8 ='https://i.postimg.cc/MpssCY7H/food-facebook-cover-20.jpg';
const bg9 ='https://i.postimg.cc/d3Kn2NYH/Food-Facebook-Cover-Banner-08.jpg';
const bg10 ='https://i.postimg.cc/Hsz3MtPz/Food-Facebook-Cover-Banner-19.jpg';
const bg11 ='https://i.postimg.cc/VNxFwZdf/Ramadan-Kareem-Facebook-Cover-45.jpg';
const bg12 ='https://i.postimg.cc/tCvWyvMK/food-web-banner-23.jpg';
 const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8,bg9,bg10,bg11,bg12];
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
                backgroundImage: `url(${images[bgIndex]})`, //images[bgIndex]
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