import React from "react";
import ReactDOM from "react-dom/client";
import del from './delivery-bike.png';
import { useNavigate } from 'react-router';

const  RestuarantCard = (props) =>{
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/menu/${props.id}`, { state: { props } });
  };
    return (
        <div onClick={handleClick} className="res-card rounded-2xl shadow-md p-4"  style={{backgroundColor:"#f0f0f0"}}>
        <img  className="res-logo" alt="res-logo" src={props.ihg} />
            <h3 className="res-name font-bold text-base text-center">{props.resName}</h3>
            <p>
            
            {props.cusinie}</p>
            <h4>⭐{ props.rating}</h4>
            <h4 className="flex items-center">
            <img className="w-6 h-6 mr-2" src={del} />
            {props.mins}</h4>

        </div>
    )
}
export default RestuarantCard