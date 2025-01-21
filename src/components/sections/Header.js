import React, { useState } from 'react';
import { logo } from '../../images/export';
import { hamburger } from '../../images/icons/export';
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    navigate('/');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className='header-box'>
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <a onClick={() => handleScroll('mainSection')}>
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="menu">
          <a onClick={() => handleScroll('mainSection')}>მთავარი</a>
          <a onClick={() => handleScroll('serviceSection')}>სერვისები</a>
          <a onClick={() => handleScroll('calculatorAndCareerSection')}>კალკულატორი</a>
          <a onClick={() => handleScroll('calculatorAndCareerSection')}>დასაქმება</a>
          <a onClick={() => handleScroll('footer')} className="highlight">კონტაქტი</a>
        </div>
        <img
          className="hamburger-menu-icon"
          src={hamburger}
          alt="hamburger-menu-button"
          onClick={toggleMenu}
        />
      </div>
    </header>
    <div className='hamburger-menu-box'>
    {menuOpen && (
        <div className="hamburger-menu">
          <a onClick={() => handleScroll('mainSection')}>მთავარი</a>
          <a onClick={() => handleScroll('serviceSection')}>სერვისები</a>
          <a onClick={() => handleScroll('calculatorAndCareerSection')}>კალკულატორი</a>
          <a onClick={() => handleScroll('calculatorAndCareerSection')}>დასაქმება</a>
          <a onClick={() => handleScroll('footer')} className="highlight">კონტაქტი</a>
        </div>
      )}
      </div>
    </div>
  );
}

export default Header;