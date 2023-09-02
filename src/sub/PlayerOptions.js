import React from 'react';

function PlayerOptions({ playerName, setPlayerName }) {
  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="playerName">Ingresa tu nombre:</label>
      <input
        type="text"
        id="playerName"
        placeholder="Tu nombre"
        value={playerName}
        onChange={handleNameChange}
      />
      <button onClick={() => alert(`¡Hola, ${playerName}!`)}>
        Confirmar
      </button>
    </div>
  );
}

export default PlayerOptions;
