import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import ChickenJockify from './components/ChickenJockify';
import BottomImage from './components/BottomImage';
import Footer from './components/Footer';
import VideoBackground from './components/VideoBackground';
import minecraftVideo from './assets/videos/minecraft-background.mp4';

function App() {
  return (
    <>
      <VideoBackground videoSrc={minecraftVideo} />
      <div className="site-container">
        <Header />
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <ChickenJockify />
        <main>
          {/* Placeholder can likely be removed now */}
          {/* <h1>Chicken Jockey - Page Content Coming Soon!</h1> */}
        </main>
        <BottomImage />
        <Footer />
      </div>
    </>
  );
}

export default App;
