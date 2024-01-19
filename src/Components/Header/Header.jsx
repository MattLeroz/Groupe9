import React from 'react';
import './Header.css'; // Assurez-vous que le chemin est correct.
import avatar from '../../Images/Avatar.png'; // Chemin relatif à partir de Header.jsx
import logo from '../../Images/AramisLogo.png'; // Chemin relatif à partir de Header.jsx
import { IoMdChatbubbles } from 'react-icons/io';

const Header = () => {
  return (
    <header className="header">
      <div className="search-area">
        <span className="search-icon">🔍</span>
        <input type="search" placeholder="Task name, status..." className="search-input" />
      </div>
      <div className="logo-area">
        <img src={logo} alt="Company Logo" className="header-logo" />
      </div>
      <div className="user-area">
        <div className="notification-area">
          <span className="notification-icon">🔔</span>
        </div>
        <div className="greeting-area">
          <span className="greeting-text">Bonjour, Clément</span>
          <img src={avatar} alt="Avatar" className="user-avatar" />
        </div>
        <div className="jarvis-area">
        <IoMdChatbubbles className="jarvis-icon" />
          <span className="jarvis-text">Jarvis</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
