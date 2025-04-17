import React from 'react';
import ThreeChicken from './ThreeChicken';

// Import the actual meme images
import aboutMemeLeft from '../assets/images/memes/about-meme-left.png';
import aboutMemeRight from '../assets/images/memes/about-meme-right.png';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2>About Chicken Jockey ($JOCKEY)</h2>
        <div className="about__content">
          <p>
          Inspired by the legendary Minecraft mob and viral movie moment, Chicken Jockey ($Jockey) is a memecoin for all solana users, minecraft players, and fans. We are building a meme coin community centered around the viral chicken jockey meme; 
          and working to promote the onboarding of minecraft players around the world into new cryptocurrency users through a familar character. 
          </p>

           {/* Add spacing */}
  <div style={{ height: '2rem' }}></div>
  
          <p>
          Chicken Jockey is more than just a viral meme movement, its the next big memecoin. 
          Join us today and prepare for a wild ride across the blocky landscape of the Solana blockchain. 

          "Chicken Jockey!"
          </p>
          
          <div className="about__chicken-container">
            <div className="about__meme about__meme--left">
              <img 
                src={aboutMemeLeft} 
                alt="Chicken Jockey Meme Left" 
                className="meme-image"
              />
            </div>
            <div className="about__chicken">
              <ThreeChicken />
            </div>
            <div className="about__meme about__meme--right">
              <img 
                src={aboutMemeRight} 
                alt="Chicken Jockey Meme Right" 
                className="meme-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
