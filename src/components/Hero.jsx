import React from 'react';
import ExchangeButtons from './ExchangeButtons';

// Import the actual meme images
import heroMemeLeft from '../assets/images/memes/hero-meme-left.png';
import heroMemeRight from '../assets/images/memes/hero-meme-right.png';

const Hero = () => {
    return (
        <section className="hero-section" id="hero">
            <div className="hero__particles">
                {/* Decorative particles */}
                <div className="particle particle--1"></div>
                <div className="particle particle--2"></div>
                <div className="particle particle--3"></div>
                <div className="particle particle--4"></div>
                <div className="particle particle--5"></div>
                <div className="particle particle--6"></div>
            </div>
            
            <div className="container">
                <div className="hero__content">
                    <div className="hero__text">
                        <div className="hero__title-wrapper">
                            <div className="hero__title-decoration"></div>
                        </div>
                        <h2>The Ultimate Minecraft Meme Coin</h2>
                        <p>Join the flock and ride the meme wave to the moon!</p>
                    </div>
                    
                    <table className="hero__table" width="100%">
                        <tbody>
                            <tr>
                                <td width="150" align="left" valign="middle">
                                    <img 
                                        src={heroMemeLeft} 
                                        alt="Chicken Jockey Meme Left" 
                                        className="hero__meme"
                                        width="150"
                                        height="150"
                                    />
                                </td>
                                <td align="center" valign="middle">
                                    <div className="hero__buttons-container">
                                        <ExchangeButtons />
                                    </div>
                                </td>
                                <td width="150" align="right" valign="middle">
                                    <img 
                                        src={heroMemeRight} 
                                        alt="Chicken Jockey Meme Right" 
                                        className="hero__meme"
                                        width="150"
                                        height="150"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="hero__bottom-decoration"></div>
        </section>
    );
};

export default Hero;
