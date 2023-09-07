import React from 'react';

function ScoreBoard(props) {  // Utiliza la prop para mostrar el marcador
  return (
    <div>
     <h2>Marcador:</h2>
      <p>Jugador: {props.playerScore}</p>
      <p>PC: {props.computerScore}</p>
    </div>
  );
}

export default ScoreBoard;
