import React, { useState } from 'react';
import './App.css'; // Importa estilos CSS

// Subcomponentes
import PlayerOptions from '/workspace/practico3/src/sub/PlayerOptions';
import ScoreBoard from '/workspace/practico3/src/sub/ScoreBoard';
import Result from '/workspace/practico3/src/sub/Result';

function App() {
  const [playerName, setPlayerName] = useState(''); // Estado para el nombre del jugador

  return (
    <div className="App">
      <h1>Juego de Piedra, Papel o Tijera</h1>
      {/* Componente para obtener el nombre del jugador */}
      <PlayerOptions playerName={playerName} setPlayerName={setPlayerName} />
      
      {/* Componente para mostrar el marcador */}
      <ScoreBoard />

      {/* Componente para mostrar los resultados de cada ronda */}
      <Result />
    </div>
  );
}

export default App;
