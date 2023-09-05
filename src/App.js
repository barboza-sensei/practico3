import React, { useState } from 'react';
import '/workspace/practico3/src/App.css'; // Importa estilos CSS

// Subcomponentes
import PlayerOptions from '/workspace/practico3/src/sub/PlayerOptions';
import ScoreBoard from '/workspace/practico3/src/sub/ScoreBoard';
import Result from '/workspace/practico3/src/sub/Result';
import Options from '/workspace/practico3/src/sub/Options'; // Importa el componente Options

function App() {
  const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador
  const [playerChoice, setPlayerChoice] = useState(null); // Estado para la elección del jugador
  const [computerChoice, setComputerChoice] = useState(null); // Estado para la elección de la computadora

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
        </div>
      ) : (
        <PlayerOptions setPlayerName={setPlayerName} />
      )}
      
      {/* Componente para mostrar el marcador */}
      <ScoreBoard />

      {/* Componente para mostrar los resultados de cada ronda */}
      <Result />
    </div>
  );
}

export default App;
