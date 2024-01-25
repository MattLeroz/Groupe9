import React from 'react';
import './Sidebar.css'; 


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-icon active">
        <img src="../Home.svg" alt="Lock" />
      </div>
      <div className="sidebar-icon">
        <img src="../Statistiques.svg" alt="Grid" />
      </div>
      <div className="sidebar-icon">
        <img src="../Carre.svg" alt="Carre" />
      </div>
      <div className="sidebar-icon">
        <img src="../Car.svg" alt="Car" />
      </div>
      <div className="sidebar-icon">
        <img src="../Settings.svg" alt="Settings" />
      </div>
    </aside>
  );
};

export default Sidebar;
