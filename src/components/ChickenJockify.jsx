import React from 'react';
import './ChickenJockify.scss';
import SectionDivider from './SectionDivider';

// Import the howto images
import howtoLeft from '../assets/images/memes/howto-left.jpg';
import howtoMid from '../assets/images/memes/howto-mid.png';
import howtoRight from '../assets/images/memes/howto-right.png';

const ChickenJockify = () => {
  return (
    <section className="chicken-jockify-section" id="chicken-jockify">
      <SectionDivider />
      <div className="container">
        <div className="instructions-header">
          <h2 className="minecraft-title">CRAFTING GUIDE</h2>
          <h1 className="minecraft-header">HOW TO CRAFT YOUR OWN<br />CHICKEN JOCKEY WITH CHAT GPT</h1>
        </div>
        
        <div className="steps-container">
          <div className="step-card minecraft-panel">
            <div className="step-number">1</div>
            <div className="step-image">
              <img src={howtoLeft} alt="Mining Phase" className="howto-image" />
            </div>
            <div className="step-title">Mining Phase:</div>
            <div className="step-description">
              Find an image of your liking, then summon the Chat GPT interface.
            </div>
          </div>
          
          <div className="step-card minecraft-panel">
            <div className="step-number">2</div>
            <div className="step-image">
              <img src={howtoMid} alt="Crafting Phase" className="howto-image" />
            </div>
            <div className="step-title">Crafting Phase:</div>
            <div className="step-description">
              Use the enchanted prompt below with your image
            </div>
            <div className="step-prompt minecraft-scroll">
              <p className="prompt-text">
                "Create an image featuring the user-submitted profile picture sitting atop a Minecraft chicken.
                If only the face is available, randomize and generate Minecraft-themed armor and weapons to complement the character.
                The art style should resemble a skilled drawing, striking a balance between recognizable Minecraft elements and a unique artistic interpretation.
                The background should reflect the whimsical and vibrant nature of Minecraft while avoiding excessive adherence to the game's typical aesthetic.
                The final image should embody a joyful and engaging theme."
              </p>
              <button 
                className="copy-button"
                onClick={() => {
                  navigator.clipboard.writeText("Create an image featuring the user-submitted profile picture sitting atop a Minecraft chicken. If only the face is available, randomize and generate Minecraft-themed armor and weapons to complement the character. The art style should resemble a skilled drawing, striking a balance between recognizable Minecraft elements and a unique artistic interpretation. The background should reflect the whimsical and vibrant nature of Minecraft while avoiding excessive adherence to the game's typical aesthetic. The final image should embody a joyful and engaging theme.");
                  alert("Prompt copied to clipboard!");
                }}
              >
                Copy Prompt
              </button>
            </div>
          </div>
          
          <div className="step-card minecraft-panel">
            <div className="step-number">3</div>
            <div className="step-image">
              <img src={howtoRight} alt="Trading Phase" className="howto-image" />
            </div>
            <div className="step-title">Trading Phase:</div>
            <div className="step-description">
              Share your Chicken Jockey in the village (Twitter/X)!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChickenJockify;
