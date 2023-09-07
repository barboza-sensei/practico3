import React, { useState } from 'react';
import rockImage from '/workspace/practico3/src/resources/rock.png';
import paperImage from '/workspace/practico3/src/resources/paper.png';
import scissorsImage from '/workspace/practico3/src/resources/scissors.png';

function Options(props) {
  const options = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleOptionClick = (option) => {
    const computerOption = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(option);
    setComputerChoice(computerOption);
    props.onSelectOption(option, computerOption); // Llama a la función pasada como prop
  };

  return (
    <div>
      <h2>Elige una opción:</h2>
      <div className="options-container">
        {options.map((option) => (
          <img
            key={option}
            src={option === "rock" ? rockImage : option === "paper" ? paperImage : scissorsImage}
            alt={option}
            className={`option ${playerChoice === option && "selected"}`}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
      {playerChoice && computerChoice && (
        <div>
          <p>Tu elección: {playerChoice}</p>
          <p>Elección de la PC: {computerChoice}</p>
        </div>
      )}
    </div>
  );
}

export default Options;
