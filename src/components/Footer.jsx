import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const h1Ref = useRef(null);

  useEffect(() => {
    // Add pulsing animation effect
    let scale = 1;
    let growing = true;
    const animateTitle = () => {
      if (h1Ref.current) {
        if (growing) {
          scale += 0.002;
          if (scale >= 1.05) growing = false;
        } else {
          scale -= 0.002;
          if (scale <= 1) growing = true;
        }
        h1Ref.current.style.transform = `scale(${scale})`;
      }
      requestAnimationFrame(animateTitle);
    };
    
    const animation = requestAnimationFrame(animateTitle);
    return () => cancelAnimationFrame(animation);
  }, []);

  const titleStyle = {
    fontSize: '4.2rem',
    color: '#35a853', // Green color
    textShadow: '4px 4px 0 #000000',
    margin: '0',
    position: 'relative',
    display: 'inline-block',
    letterSpacing: '2px',
    transition: 'transform 0.2s ease',
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__title">
          <h1 ref={h1Ref} style={titleStyle}>
            CHICKEN JOCKEY!
          </h1>
        </div>
        <div className="footer__content">
          <div className="footer__copyright">
            &copy; {currentYear} Chicken Jockey ($JOCKEY). All rights reserved. Bawk!
          </div>
          <div className="footer__social">
            <a href="https://x.com/jockeyonsolana" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">𝕏</span>
              Twitter
            </a>
            <a href="https://dexscreener.com/solana/fykuc1aehv5ziauh6wf7zuuvc3b5hehzwuerxlwwmu88" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">📊</span>
              DexScreener
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
