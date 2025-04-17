import React from 'react';

// Placeholder imports - replace with actual image paths
// import walletIcon from '../assets/images/wallet-icon.png'; 
// import solIcon from '../assets/images/sol-icon.png';
// import swapIcon from '../assets/images/swap-icon.png';
// import jokeyIcon from '../assets/images/jokey-icon.png'; 

const HowToBuy = () => {
  // Function to handle copying contract address
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Contract address copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  return (
    <section className="how-to-buy-section" id="how-to-buy">
      <div className="container">
        <h2>How To Buy $JOCKEY</h2>
        <p className="how-to-buy__subtitle">Follow these steps to join the flock! <span role="img" aria-label="chicken">🐔</span></p>
        <div className="how-to-buy__steps">
          <div className="step">
            {/* <img src={walletIcon} alt="Wallet Icon" className="step__icon" /> */}
            <div className="step__icon-placeholder" aria-label="Wallet" role="img">💼</div>
            <h3>1. Get a Wallet</h3>
            <p>Download Phantom or your favorite Solana wallet from the app store or browser extension.</p>
          </div>
          <div className="step">
            {/* <img src={solIcon} alt="SOL Coin Icon" className="step__icon" /> */}
            <div className="step__icon-placeholder" aria-label="SOL Coin" role="img">💰</div>
            <h3>2. Get Some SOL</h3>
            <p>Buy SOL on an exchange (like Coinbase, Binance, etc.) and send it to your Solana wallet address.</p>
          </div>
          <div className="step">
            {/* <img src={swapIcon} alt="Swap Icon" className="step__icon" /> */}
            <div className="step__icon-placeholder" aria-label="Swap" role="img">🔄</div>
            <h3>3. Go to Raydium/Jupiter</h3>
            <p>Connect your wallet to Raydium or Jupiter Swap. Paste the $JOCKEY contract address into the swap.</p>
             <p>Contract: <span 
                className="contract-address" 
                onClick={() => copyToClipboard("B91Nyc6SnWqr5DRR34eEMKuZrWh4zBhW9VhX4UNLpump")}
                title="Click to copy"
              >
                B91Nyc6SnWqr5DRR34eEMKuZrWh4zBhW9VhX4UNLpump
              </span>
            </p>
          </div>
          <div className="step">
            {/* <img src={jokeyIcon} alt="Chicken Jockey Icon" className="step__icon" /> */}
            <div className="step__icon-placeholder" aria-label="Chicken Jockey Icon" role="img">🐔</div>
            <h3>4. Swap SOL for $JOCKEY</h3>
            <p>Confirm the swap. Make sure you have enough SOL for gas fees. Welcome to the flock!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
