import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar'; 
import ParkingSection from './Components/maincontent/ParkingSection';
import AlertesSection from './Components/Alertes/AlertesSection';
import IncomingFleets from './Components/IncomingFleets/IncomingFleets';
import IA from './Components/IA/IA';
import Chat from './Components/Chat/ChatComponent';
import './App.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <ParkingSection/>
      <AlertesSection />
      <IncomingFleets/> 
      <IA/>
      <Chat/>

    </div>
  );
}

export default App;
