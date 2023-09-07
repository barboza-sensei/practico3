import React from 'react';

function Result(props) {// Utiliza la prop para mostrar los resultados
  const { playerChoice, computerChoice } = props;

  // Implementa la lógica para determinar el resultado del juego
  const determineWinner = () => {
    // ...
    // Aquí deberías agregar tu lógica para determinar el ganador y devolver el resultado.
  };

  const result = determineWinner();

  return (
   <div>
      <h2>Resultados:</h2>
      <p>Tu elección: {playerChoice}</p>
      <p>Elección de la PC: {computerChoice}</p>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default Result;
