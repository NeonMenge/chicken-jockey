import React from 'react';
import pixelChickenImage from '../assets/images/pixel-chicken.png';

const BottomImage = () => {
  return (
    <div className="bottom-image-container">
      <div className="container">
        <div className="bottom-image">
          <img src={pixelChickenImage} alt="Pixel Chicken" />
        </div>
      </div>
    </div>
  );
};

export default BottomImage;
