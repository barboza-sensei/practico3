import React, { useState } from 'react';

function Options({ onSelectOption }) {
  const options = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleOptionClick = (option) => {
    const computerOption = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(option);
    setComputerChoice(computerOption);
    onSelectOption(option, computerOption);
  };

  return (
    <div>
      <h2>Elige una opción:</h2>
      <div className="options-container">
        {options.map((option) => (
          <img
            key={option}
            src={`/workspace/practico3/src/resources/${option}.png`}
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
