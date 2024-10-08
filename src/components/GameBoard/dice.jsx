import React, { useState } from "react";
import "./dice.css";

function Dice({ onRollDone }) {
  const diceFaces = [
    "assets/imgs/dice/dice-1.png",
    "assets/imgs/dice/dice-2.png",
    "assets/imgs/dice/dice-3.png",
    "assets/imgs/dice/dice-4.png",
    "assets/imgs/dice/dice-5.png",
    "assets/imgs/dice/dice-6.png",
  ];
  const [diceImage, setDiceImage] = useState("assets/imgs/dice/dice-1.png"); // Default dice face
  const [rolling, setRolling] = useState(false); // Track if dice is rolling

  // Dice rolling GIF
  const diceRollGif = "assets/imgs/dice/dice-roll.gif";

  const rollDice = () => {
    setRolling(true);
    setDiceImage(diceRollGif); // Show the rolling GIF

    // After GIF duration, stop rolling and show a random face
    setTimeout(() => {
      const randomFace = Math.floor(Math.random() * 6);
      setDiceImage(diceFaces[randomFace]); // Set final dice face
      setRolling(false);

      if (onRollDone) {
        onRollDone(randomFace + 1); //Passing data back to ludo board
      }
    }, 2000); // GIF duration
  };

  return (
    <div className="dice">
      <button onClick={rollDice} disabled={rolling} className="dice__btn">
        <img src={diceImage} alt="Dice" className="dice__img" />
      </button>
    </div>
  );
}

export default Dice;
