import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './AlertesSection.css';

const AlertesSection = () => {
  const alertData = [
    { name: 'Opel Corsa', stock: '19/67', incoming: 6, otherFleets: 17 },
    { name: 'Peugeot 3008', stock: '40/85', incoming: 10, otherFleets: 12 },
    { name: 'Citroën C2', stock: '20/55', incoming: 6, otherFleets: 0 },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="alertes-section">
      <h2 className="alertes-title">Alertes</h2>
      <div className="alertes-container">
        {alertData.map((alert, index) => (
          <div key={index} className="alert-box">
            <div className="alert-box-title">{alert.name}</div>
            <div className="alert-box-details">Stock: {alert.stock}</div>
            <div className="alert-box-details">Incoming: {alert.incoming}</div>
            <div className="alert-box-details">Other fleets: {alert.otherFleets}</div>
          </div>
        ))}
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default AlertesSection;
