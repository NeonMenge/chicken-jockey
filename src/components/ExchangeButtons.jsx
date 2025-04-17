import React from 'react';
import './ExchangeButtons.scss';

// Import actual exchange logos
import jupiterLogo from '../assets/images/exchanges/jupiter-ag-jup-logo.jpg';
import dexScreenerLogo from '../assets/images/exchanges/dex-screener-icon.jpg';
import moonshotLogo from '../assets/images/exchanges/moonshot-logo.jpg';

const exchanges = [
  {
    name: 'Jupiter',
    logo: jupiterLogo,
    url: 'https://jup.ag/tokens/B91Nyc6SnWqr5DRR34eEMKuZrWh4zBhW9VhX4UNLpump'
  },
  {
    name: 'Dexscreener',
    logo: dexScreenerLogo,
    url: 'https://dexscreener.com/solana/fykuc1aehv5ziauh6wf7zuuvc3b5hehzwuerxlwwmu88'
  },
  {
    name: 'Moonshot',
    logo: moonshotLogo,
    url: 'https://moonshot.money/8rEu1kzoBgG6NslNsaar608b?ref=jUZghsiNPZ'
  }
];

const ExchangeButtons = () => {
  return (
    <div className="exchange-buttons">
      {exchanges.map((exchange, index) => (
        <a 
          key={index} 
          href={exchange.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="exchange-button"
          aria-label={`Buy on ${exchange.name}`}
        >
          <div className="exchange-logo">
            <img 
              src={exchange.logo} 
              alt={exchange.name} 
              style={{ borderRadius: '20%' }}
            />
          </div>
          <div className="exchange-name">{exchange.name}</div>
        </a>
      ))}
    </div>
  );
};

export default ExchangeButtons;
