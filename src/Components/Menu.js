import React from 'react';
import { useLocation } from 'react-router';

const Menu = () => {
  const location = useLocation();
  const { restaurant } = location.state;

  return (
    <div className="menu-container p-4">
      <h1 className="text-xl font-bold mb-4">{restaurant.resName} Menu</h1>

      {Object.keys(restaurant.menu).map((section, index) => (
        <div key={index} className="menu-section mb-4">
          <h2 className="text-lg font-semibold">{section}</h2>
          {restaurant.menu[section].map((item, idx) => (
            <div key={idx} className="menu-item my-2 p-2 border rounded">
              <h3 className="font-bold">{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ₹{item.cost}</p>
              {item.rating && <p>Rating: {item.rating} ⭐</p>}
              {item.reviews && <p>{item.reviews} Reviews</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
