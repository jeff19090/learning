// app/page.js (or pages/index.js)
'use client'; // Required for useState, useEffect in App Router

import React, { useState } from 'react';
import EmulatorDisplay from '../components/EmulatorDisplay';
import GameControls from '../components/GameControls';
import CheatInterface from '../components/CheatInterface';

export default function HomePage() {
  const [currentRom, setCurrentRom] = useState(null);

  const handleRomLoad = (romFile) => {
    setCurrentRom(romFile);
    console.log('ROM selected:', romFile.name);
  };

  const handlePause = () => {
    // TODO: Implement pause/resume logic with the emulator
    console.log('Pause/Resume clicked');
  };

  const handleReset = () => {
    // TODO: Implement reset logic with the emulator
    console.log('Reset clicked');
    // Potentially setCurrentRom(null) or reload the current ROM
  };

  const handleApplyCheat = (cheats) => {
    // TODO: Pass cheat data to the emulator instance
    console.log('Cheats to apply in main page:', cheats);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>GBA Emulator with Next.JS</h1>
      <GameControls 
        onRomLoad={handleRomLoad} 
        onPause={handlePause} 
        onReset={handleReset} 
      />
      <hr style={{ margin: '20px 0' }} />
      {currentRom ? (
        <EmulatorDisplay romFile={currentRom} />
      ) : (
        <p>Please select a GBA ROM file to start.</p>
      )}
      <hr style={{ margin: '20px 0' }} />
      {currentRom && (
        <CheatInterface onApplyCheat={handleApplyCheat} />
      )}
    </div>
  );
}