// components/CheatInterface.js
import React, { useState } from 'react';

const CheatInterface = ({ onApplyCheat }) => {
  const [lives, setLives] = useState(3);
  const [isInvincible, setIsInvincible] = useState(false);

  const handleApply = () => {
    // TODO: This function will eventually call the emulator's API
    // to write these values to the game's memory.
    onApplyCheat({ lives, isInvincible });
    console.log('Applying cheats:', { lives, isInvincible });
  };

  return (
    <div>
      <h4>Cheat Interface (Placeholder)</h4>
      <div>
        <label htmlFor="lives">Lives: </label>
        <input 
          type="number" 
          id="lives" 
          value={lives} 
          onChange={(e) => setLives(parseInt(e.target.value, 10))} 
        />
      </div>
      <div>
        <label htmlFor="invincible">Invincible: </label>
        <input 
          type="checkbox" 
          id="invincible" 
          checked={isInvincible} 
          onChange={(e) => setIsInvincible(e.target.checked)} 
        />
      </div>
      <button onClick={handleApply} style={{ marginTop: '10px' }}>Apply Cheats</button>
    </div>
  );
};

export default CheatInterface;