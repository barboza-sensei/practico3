import React, { useState } from 'react';
import '/workspace/practico3/src/App.css'; // Importa estilos CSS

// Subcomponentes
import PlayerOptions from '/workspace/practico3/src/sub/PlayerOptions';
import Options from '/workspace/practico3/src/sub/Options'; // Importa el componente Options
import ScoreBoard from '/workspace/practico3/src/sub/ScoreBoard'; // Importa el componente ScoreBoard
import Result from '/workspace/practico3/src/sub/Result'; // Importa el componente Result

function App() {
  const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
  const [playerChoice, setPlayerChoice] = useState(null); // Estado para la elección del jugador
  const [computerChoice, setComputerChoice] = useState(null); // Estado para la elección de la computadora

  const handleNameConfirmed = (name) => {
    setPlayerName(name);
  };
  
   // Función para manejar la selección de opciones por el jugador y la computadora
   const handleOptionSelection = (playerOption, computerOption) => {
    setPlayerChoice(playerOption);
    setComputerChoice(computerOption);
    // Aquí puedes agregar la lógica para determinar el ganador y actualizar el marcador
  };
  
  return (
    <div className="App">
      <h1>Juego de Piedra, Papel o Tijera</h1>
      {/* Componente para obtener el nombre del jugador */}
      {playerName ? (
        <div>
          <p>¡Hola, {playerName}!</p>
          {/* Componente para seleccionar opciones */}
          <Options onSelectOption={handleOptionSelection} />
          <ScoreBoard playerChoice={playerChoice} computerChoice={computerChoice} />
          <Result playerChoice={playerChoice} computerChoice={computerChoice} />
        </div>
      ) : (
        <PlayerOptions onNameConfirmed={handleNameConfirmed} />
      )}
      {/* Resto de tu interfaz, incluyendo el marcador y resultados */}
    </div>
  );
}

export default App;
