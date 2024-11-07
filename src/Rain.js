import React from 'react';


function Rain({ isVisible }) {
  const createRaindrops = () => {
    const raindrops = [];
    const numRaindrops = 100; // Number of raindrops

    for (let i = 0; i < numRaindrops; i++) {
      const leftPosition = Math.random() * 100 + 'vw'; // Random horizontal position
      const delay = Math.random() * 5 + 's'; // Random delay for each raindrop

      raindrops.push(
        <div
          key={i}
          className="raindrop"
          style={{
            left: leftPosition,
            animationDelay: delay,
          }}
        />
      );
    }

    return raindrops;
  };

  return (
    <div className={`rain-container ${isVisible ? 'visible' : ''}`}>
      {createRaindrops()}
    </div>
  );
}

export default Rain;
