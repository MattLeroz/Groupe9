import React from 'react';
import './MainContent.css';
import ParkingSection from './ParkingSection';
import FleetsSection from './FleetsSection';
import RecapSection from './RecapSection';
import SalesSection from './SalesSection';

const MainContainer =
() => {
return ( 
<div className="main-container">
<ParkingSection />
<FleetsSection />
<RecapSection />
<SalesSection />
{}
</div>
);
};
export default MainContainer;
