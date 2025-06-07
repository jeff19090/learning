// components/EmulatorDisplay.js
import React, { useEffect, useRef } from 'react';

const EmulatorDisplay = ({ romFile }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (romFile && canvasRef.current) {
      // TODO: Initialize your chosen GBA emulator here
      // e.g., const gba = new GBAJs();
      // gba.setCanvas(canvasRef.current);
      // gba.loadRom(romFile);
      // gba.run();
      console.log('EmulatorDisplay: ROM file received, initialize emulator with:', romFile.name);
      // Placeholder: just drawing a box
      const ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = 'lightgray';
      ctx.fillRect(0, 0, 480, 320); // Typical GBA screen resolution (scaled)
      ctx.fillStyle = 'black';
      ctx.fillText('Emulator Will Load Here', 50, 50);
    }
  }, [romFile]);

  return (
    <div>
      <canvas ref={canvasRef} width="480" height="320" style={{ border: '1px solid black' }}></canvas>
      {/* Add any emulator-specific UI elements here */}
    </div>
  );
};

export default EmulatorDisplay;