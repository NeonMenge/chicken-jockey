import React, { useEffect, useRef } from 'react';

const MinecraftBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate block sizes based on new dimensions
      blockSize = Math.floor(Math.min(canvas.width, canvas.height) / 50) + 1;
      hBlocks = Math.floor(canvas.width / blockSize) + 2;
      vBlocks = Math.floor(canvas.height / blockSize) + 2;
      
      // Reinitialize blocks array
      blocks = [];
      for(let i = 0; i < vBlocks; ++i) {
        blocks[i] = [];
        for(let j = 0; j < hBlocks; ++j) {
          blocks[i].push(getBlock());
        }
      }
    };

    let blockSize = Math.floor(Math.min(canvas.width, canvas.height) / 50) + 1;
    let hBlocks = Math.floor(canvas.width / blockSize) + 2;
    let vBlocks = Math.floor(canvas.height / blockSize) + 2;
    let blocks = [];

    function getBlock() {
      return 0.05 + 0.25 * Math.random();
    }

    for(let i = 0; i < vBlocks; ++i) {
      blocks[i] = [];
      for(let j = 0; j < hBlocks; ++j) {
        blocks[i].push(getBlock());
      }
    }

    let offset = 0;
    let animationFrameId;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for(let i = 0; i < vBlocks; ++i) {
        for(let j = 0; j < hBlocks; ++j) {
          ctx.fillStyle = `rgba(0,0,0,${blocks[i][j]})`;
          let x = j * blockSize;
          let y = i * blockSize - offset;
          if(y < -blockSize) y += vBlocks * blockSize;
          ctx.fillRect(x, y, blockSize, blockSize);
        }
      }
      
      offset++;
      if(offset >= blockSize) {
        offset = 0;
        let temp = blocks.shift();
        blocks.push(temp);
      }
      
      animationFrameId = requestAnimationFrame(draw);
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />
  );
};

export default MinecraftBackground;
