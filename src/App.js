import React, { useState, useEffect } from 'react';
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
  const [playerScore, setPlayerScore] = useState(0); // parte5
  const [computerScore, setComputerScore] = useState(0); // parte5
  const [round, setRound] = useState(0);// parte5
  const [gameOver, setGameOver] = useState(false); //parte7
  const [winner, setWinner] = useState(null); //parte7

  useEffect(() => {//parte 6
    if (playerScore === 3 || computerScore === 3 || round === 5) {
      let winner;
      if (playerScore > computerScore) {
        winner = playerName;
      } else if (computerScore > playerScore) {
        winner = 'La PC';
      } else {
        winner = 'Empate';
      }
      alert(`El juego ha terminado. El ganador es: ${winner}`);
      resetGame();
    }
  }, [playerScore, computerScore, round, playerName]);

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setRound(0);
    setGameOver(false);
    setWinner(null);
  };

  const handleNameConfirmed = (name) => {
    setPlayerName(name);
  };
  
   // Función para manejar la selección de opciones por el jugador y la computadora
   const handleOptionSelection = (playerOption, computerOption) => {
    setPlayerChoice(playerOption);
    setComputerChoice(computerOption);

    // Implementa lógica para determinar el ganador de la ronda
    const result = determineWinner(playerOption, computerOption);
    if (result === 'Ganaste') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'La PC ganó') {
      setComputerScore(computerScore + 1);
    }

    // Incrementar el número de rondas
    setRound(round + 1);
  };
  
  const determineWinner = (playerOption, computerOption) => {
    // Implementa aquí las reglas del juego para determinar al ganador de la ronda
    if (
      (playerOption === 'rock' && computerOption === 'scissors') ||
      (playerOption === 'scissors' && computerOption === 'paper') ||
      (playerOption === 'paper' && computerOption === 'rock')
    ) {
      return 'Ganaste';
    } else if (playerOption === computerOption) {
      return 'Empate';
    } else {
      return 'La PC ganó';
    }
  };
  
  return (
    <div className="App">
      <h1>Juego de Piedra, Papel o Tijera</h1>
      {/* Componente para obtener el nombre del jugador */}
      {playerName ? (
        <div>
          <p>¡Hola, {playerName}!</p>
          {gameOver ? (
            <div>
              <h2>{winner === playerName ? '¡Has ganado!' : 'La PC ha ganado.'}</h2>
              <button onClick={resetGame}>Reiniciar Juego</button>
            </div>
          ) : (
            <div>
          {/* Componente para seleccionar opciones */}
          <Options onSelectOption={handleOptionSelection} />
          <ScoreBoard playerScore={playerScore} computerScore={computerScore} />
          <Result
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            round={round}
            />
            </div>
          )}
        </div>
      ) : (
        <PlayerOptions onNameConfirmed={handleNameConfirmed} />
      )}
      {/* Resto de la interfaz, incluyendo el marcador y resultados */}
    </div>
  );
}

export default App;
