import React from 'react';
import bannerImage from '../assets/images/header.webp';
import jockeyLogo from '../assets/images/logos/jockeytext.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header__nav-container">
        <div className="container">
          <nav className="header__nav">
            <div className="header__logo">
              <a href="#">
                <img 
                  src={jockeyLogo} 
                  alt="$JOCKEY Logo" 
                  className="header__logo-image" 
                />
              </a>
            </div>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#tokenomics">Tokenomics</a></li>
              <li><a href="#how-to-buy">How<span style={{ margin: '0 -1px' }}>To</span>Buy</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header__banner">
        <img src={bannerImage} alt="Chicken Jockey Banner" className="banner-image" />
      </div>
    </header>
  );
};

export default Header;
