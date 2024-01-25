import React, { useState } from 'react';
import './ParkingSection.css';
import { FaArrowUp } from 'react-icons/fa';
import ParkingData from '../../data/TailleParking.json';
const ParkingSection = () => {
  const [currentStatus, setCurrentStatus] = useState({
    onSale: true,
    onStandby: false,
    incoming: false,
  });
  const statusMapping = {
    'onSale': 'Nombre de véhicules en vente',
    'onStandby': 'Nombre en attente',
    'incoming': 'Nombre en arrivage'
  };
  return (
    <div className="parking-section">
      <h3>Parking</h3>
      <div className="status-indicators">
        <button className={`status-button ${currentStatus.onSale ? 'active' : ''}`} onClick={() => setCurrentStatus(oldVal => ({ ...oldVal, onSale: !oldVal.onSale }))}>En vente</button>
        <button className={`status-button ${currentStatus.onStandby ? 'active' : ''}`} onClick={() => setCurrentStatus(oldVal => ({ ...oldVal, onStandby: !oldVal.onStandby }))}>En attente</button>
        <button className={`status-button ${currentStatus.incoming ? 'active' : ''}`} onClick={() => setCurrentStatus(oldVal => ({ ...oldVal, incoming: !oldVal.incoming }))}>En arrivage</button>
      </div>
      {ParkingData.Feuil1.map((car, index) => (
        <div key={index} className="car-container">
          <div className="car-details">
            { }
            <span className="car-model">{car['Modèle du véhicule ']}</span>
          </div>
          <div className="progress-container">
            {currentStatus.onSale && <div className="progress-bar" style={{ width: `${car[statusMapping['onSale']] / car['Taille Parking '] * 100}%`, backgroundColor:'blue' }}></div>}
            {currentStatus.onStandby && <div className="progress-bar" style={{ width: `${car[statusMapping['onStandby']] / car['Taille Parking '] * 100}%`, backgroundColor: 'orange' }}></div>}
            {currentStatus.incoming && <div className="progress-bar" style={{ width: `${car[statusMapping['incoming']] / car['Taille Parking '] * 100}%`, backgroundColor:  'green' }}></div>}
          </div>
          <div className="car-details">
            <span className="car-price">{`${car[statusMapping[currentStatus]]} / ${car['Taille Parking ']}`}</span>
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