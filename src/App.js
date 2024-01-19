// src/App.js

import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar'; // Assurez-vous que le chemin est correct
import ParkingSection from './Components/maincontent/ParkingSection';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <ParkingSection/>
      {/* Vous pouvez ajouter d'autres composants ici, comme MainContent ou Footer */}
    </div>
  );
}

export default App;
