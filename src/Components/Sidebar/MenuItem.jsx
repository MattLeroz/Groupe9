// src/components/sidebar/MenuItem.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css'; 

const MenuItem = ({ icon, text, active }) => {
  const activeClass = active ? 'menu-item--active' : '';
  return (
    <div className={`menu-item ${activeClass}`}>
      {icon && <span className="menu-item__icon">{icon}</span>}
      <span className="menu-item__text">{text}</span>
    </div>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.node, // Icon peut être un composant, un élément JSX ou une string
  text: PropTypes.string.isRequired,
  active: PropTypes.bool
};

MenuItem.defaultProps = {
  active: false,
  icon: null // Définir une valeur par défaut pour icon en cas où il n'est pas fourni
};

export default MenuItem;
