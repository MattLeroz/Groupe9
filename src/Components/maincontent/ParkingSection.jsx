import React from 'react';
import './ParkingSection.css'; 
import { FaArrowUp } from 'react-icons/fa';
const ParkingSection = () => {
  const cars = [
    { model: 'Peugeot 208', price: '99K€ / 1,75K€', progress: 80, image: '/Peugeot208.png' },
    { model: 'Citroën C4', price: '99K€ / 1,75K€', progress: 55, image: '/CitroenC4.png' },
    { model: 'Peugeot 308', price: '89K€ / 1,65K€', progress: 65, image: '/Peugeot308.png' },
    { model: 'Peugeot 3008', price: '95K€ / 1,80K€', progress: 75, image: '/Peugeot3008.png' },
  ];
  return (
    <div className="parking-section">
      <h2>Parking</h2>
      <div className="status-indicators">
        <div className="status-indicator">
          <span className="status-circle on-sale"></span>
          <span>On sale</span>
        </div>
        <div className="status-indicator">
          <span className="status-circle on-standby"></span>
          <span>On standby</span>
        </div>
        <div className="status-indicator">
          <span className="status-circle incoming"></span>
          <span>Incoming</span>
        </div>
      </div>
      
      
      {cars.map((car, index) => (
        
        <div key={index} className="car-container">
          <div className="car-details">
            <img src={car.image} alt={car.model} className="car-image" />
            <span className="car-model">{car.model}</span>
          </div>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${car.progress}%` }}></div>
          </div>
          <div className="car-details">
            <span className="car-price">{car.price}</span>
          </div>
        </div>
      ))}
      <button className="scroll-to-top">
        <FaArrowUp />
      </button>
    </div>
  );
};
export default ParkingSection;

