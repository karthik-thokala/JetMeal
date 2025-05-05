import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import RestuarantCard from "./RestuarantCard.js"
import { useState } from "react";
import HData from './Hyderabad.json';
import Mdata from './Mumbai.json';
import Bdata from './Bengaluru.json';
import Cdata from './Chennai.json';
import { useNavigate } from "react-router";
import Ddata from './Delhi.json';
import Background from './Background.jpg';
const Body = () =>{
  const navigate = useNavigate();

    const [searchtext ,setsearchtext] = useState("");
    const [selectedCity, setSelectedCity] = useState("Hyderabad");
    const [showTopRated, setShowTopRated] = useState(false);

    const getCityData = (city) => {
        switch (city) {
            case "Hyderabad":
                return HData;
            case "Mumbai":
                return Mdata;
            case "Bengaluru":
                return Bdata;
            case "Chennai":
                return Cdata;
            case "Delhi":
                return Ddata;
            default:
                return HData;
        }
    };

    const filteredData = getCityData(selectedCity)
    .filter((res) => res.resName.toLowerCase().includes(searchtext.toLowerCase()))
    .filter((res) => !showTopRated || parseFloat(res.rating) > 4);


    return (
        <div className="relative body">
  <div
    className="absolute top-0 left-0 w-full h-full opacity-80 -z-10"
    style={{
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  ></div>
  <div className="filter">
    <div className="m-4 p-4 flex items-center space-x-4"> 
      <input
        type="text"
        className="border border-solid border-black mr-2"
        value={searchtext}
        onChange={(e) => setsearchtext(e.target.value)}
      />
      <button className="text-black font-bold texxt-2xl" onClick={() => {}}>Search</button>
      
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="border border-solid border-black px-4 py-2 rounded-md"
      >
        <option value="Hyderabad">Hyderabad</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
      </select>
      
      <button
        className="px-4 py-2 bg-gray-100 flex items-center rounded-2xl text-lg leading-none ml-6"
        style={{ height: "40px", paddingTop: "6px", paddingBottom: "6px" }}
        onClick={() => setShowTopRated(!showTopRated)}
      >
        {showTopRated ? "Show All" : "Top Rated Restaurants"}
      </button>
      <button
  onClick={() => navigate("/meals")}
  className="ml-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
>
  🍽️ Meal Suggestions
</button>
    </div>
  </div>
  <div className="res-container px-6 max-w-8xl mx-auto">
    {filteredData.map((res) => (
      <RestuarantCard
        key={res.id}
        resName={res.resName}
        cusinie={res.cuisine}
        rating={res.rating}
        mins={res.mins}
        ihg={res.img}
      />
    ))}
  </div>
</div>

    )
}

export default Body