import React, { useState } from 'react';

function PlayerOptions({ setPlayerName }) {
  const [nameInput, setNameInput] = useState(''); // Estado para el nombre del jugador

  const handleNameChange = (event) => {
    setNameInput(event.target.value); // Actualiza el estado con el nombre ingresado
  };

  const handleNameConfirmation = () => {
    if (nameInput.trim() !== '') {
      setPlayerName(nameInput); // Establece el nombre del jugador en el estado principal
      alert(`¡Hola, ${nameInput}!`); // Muestra un mensaje de bienvenida
    } else {
      alert('Por favor, ingresa tu nombre antes de jugar.'); // Mensaje de alerta si el nombre está vacío
    }
  };

  return (
    <div>
      <label htmlFor="playerName">Ingresa tu nombre:</label>
      <input
        type="text"
        id="playerName"
        placeholder="Tu nombre"
        value={nameInput}
        onChange={handleNameChange}
      />
      <button onClick={handleNameConfirmation}>Confirmar</button>
    </div>
  );
}

export default PlayerOptions;
