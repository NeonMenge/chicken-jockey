import React from 'react';
import MinecraftBackground from './MinecraftBackground';
import './Tokenomics.scss';

const Tokenomics = () => {
  // Tokenomics data
  const tokenomicsData = {
    totalSupply: '1,000,000,000 JOCKEY',
    tax: '0% Buy / 0% Sell',
    liquidity: 'Burned Forever',
    contract: 'B91Nyc6SnWqr5DRR34eEMKuZrWh4zBhW9VhX4UNLpump'
  };
  
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
    <section className="tokenomics-section" id="tokenomics">
      <div className="tokenomics-background-container">
        <MinecraftBackground />
      </div>
      <div className="container">
        <h2>Tokenomics</h2>
        <div className="tokenomics__content">
          <div className="tokenomics__details">
            <ul>
              <li><strong>Total Supply:</strong> {tokenomicsData.totalSupply}</li>
              <li><strong>Buy/Sell Tax:</strong> {tokenomicsData.tax}</li>
              <li><strong>Liquidity:</strong> {tokenomicsData.liquidity}</li>
              <li>
                <strong>Contract Address:</strong> 
                <span 
                  className="contract-address" 
                  onClick={() => copyToClipboard(tokenomicsData.contract)}
                  title="Click to copy"
                >
                  {tokenomicsData.contract}
                </span>
              </li> 
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
