import React, { useState, useEffect } from 'react';
import './IncomingFleets.css';
import { FaArrowUp } from 'react-icons/fa';

const IncomingFleets = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  return (
    <div className="incoming-fleets-container">
      <div className="incoming-fleets-header"></div>
      <h3 className="incoming-fleets-title">Incoming Fleets</h3>
      <div className="fleet-item">
        <div className="fleet-brand">
          <img
            src="https://imgs.search.brave.com/CX109Nfa0_4dlO6Dx1nSqRbrklnBDimQ_qoDPq7hNHA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby12b2l0dXJl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMS9Mb2dv/LVBldWdlb3QucG5n"
            alt="Peugeot"
            className="brand-icon"
          />
          <span>Peugeot</span>
        </div>
        <div className="fleet-vehicles">84</div>
        <div className="fleet-valuation">78/84</div>
      </div>
      <div className="fleet-item">
        <div className="fleet-brand">
          <img
            src="https://imgs.search.brave.com/QbdMNkNowWmddkYl1yOcG9p6BS4rNGmCKCFWNQQuwkE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzA0L0NpdHJvZW5f/bG9nby5wbmc"
            alt="Peugeot"
            className="brand-icon"
          />
          <span>Citroën</span>
        </div>
        <div className="fleet-vehicles">22</div>
        <div className="fleet-valuation">22/76</div>
      </div>
      <div className="fleet-item">
        <div className="fleet-brand">
          <img
            src="https://imgs.search.brave.com/zZ0NXaPlCM3AMT_-qJtKTyOTNYPfFT7AUB6nscQ1EFs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby12b2l0dXJl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wMy9sb2dv/LW9wZWwtMTAyNHg4/OTcucG5n"
            alt="Peugeot"
            className="brand-icon"
          />
          <span>Opel</span>
        </div>
        <div className="fleet-vehicles">16</div>
        <div className="fleet-valuation">16/32</div>
      </div>

      {showScrollButton && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default IncomingFleets;
