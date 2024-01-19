// src/components/Sidebar.jsx

import React from 'react';
import './Sidebar.css'; // Assurez-vous que le chemin est correct.


const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Icônes de la sidebar */}
      <div className="sidebar-icon active">
        {/* Remplacez `path-to-lock-icon` par le chemin réel vers votre icône */}
        <img src="../Home.svg" alt="Lock" />
      </div>
      <div className="sidebar-icon">
        <img src="../Statistiques.svg" alt="Grid" />
      </div>
      <div className="sidebar-icon">
        <img src="/path-to-car-icon.svg" alt="Car" />
      </div>
      <div className="sidebar-icon">
        <img src="/path-to-settings-icon.svg" alt="" />
        <span></span>
      </div>
      <div className="sidebar-icon">
        <img src="/path-to-car-icon.svg" alt="" />
      </div>
    </aside>
  );
};

export default Sidebar;
