import './App.css';
import React, { useEffect } from 'react';
import Dice from './Dice';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Rain from './Rain';

function App() {
  const [tenzies, setTenzies] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [dices, setDices] = React.useState(allNewDice());
  const [isRaining, setIsRaining] = useState(false); 

  

  useEffect(() => {
    if (start && !tenzies) {
      const timer = setInterval(() => {
        setSeconds((sec) => {
          if (sec >= 59) {
            setMinutes((min) => {
              if (min >= 59) {
                setHours((hr) => (hr + 1) % 24);
                return 0;
              }
              return min + 1;
            });
            return 0;
          }
          return sec + 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [start, tenzies]);

 
  useEffect(() => {
    // const firstValue = dices[0].value;
    const allHeld = dices.every((dice) => dice.isHeld);
    const allSameValue = dices.every((dice) => dice.value === dices[0].value);
  
    if (allHeld && allSameValue) {
      setTenzies(true);
      setIsRaining(true);
    }

   

    
  }, [dices]);

  function allNewDice() {
    const newArray = [];
    for (let i = 0; i < 6; i++) {
      newArray.push({
        id: nanoid(),
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
      });
    }
    return newArray;
  }

  function holdDice(id) {
    if (!tenzies) {
      setStart(true);
      setDices((prevDices) =>
        prevDices.map((dice) =>
          dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
        )
      );
    }
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false);
      setDices(allNewDice());
      setRolls(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      setStart(false);
      setIsRaining(false);
    } else {
      setDices((prevDices) =>
        prevDices.map((dice) =>
          dice.isHeld ? dice : { ...dice, value: Math.floor(Math.random() * 6) + 1 }
        )
      );
      setRolls((prevRolls) => prevRolls + 1);
    }
  }

  const diceElements = dices.map((dice) => (
    <Dice
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
      </p>
      <div className="timer">
        Time: {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="rolls">Rolls: {rolls}</div>

      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-button">
        {tenzies ? 'New Game' : 'Roll Dice'}
      </button>

      <div>{isRaining && <Rain />}</div>
    </main>
  );

  
}

export default App;
