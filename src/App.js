import './components/css/App.css';
import Header from './components/dieComponents/Header';

import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {

  // states
  // const [tenzies, setTenzies] = useState(false);
  const[dice, setDice] = useState(allNewDice())

  //an array that generates 10 random numbers between 1-6

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld:false,
      id:nanoid()
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }


  //roll dice
  function rollDice(){
    setDice(oldDice => oldDice.map(die => {
      return (
        die.isHeld ? die : generateNewDie()
        )
    }))
  }

  //holding dice value
  const holdDice =(id) =>{
    setDice(oldDice => oldDice.map(die =>{
      return (
        die.id === id ?
        {...die, isHeld: !die.isHeld}: die
        )
    }))
  }

  // rendering dice
  // const diceElements = dice.map(die => (
  //   <Die
  //     key={die.id}
  //     value ={die.value}
  //     isHeld={die.isHeld}
  //     holdDice={() => holdDice(die.id)}
  //   />
  // ))

  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        {dice.map(die => (
            <Die
              key={die.id}
              value ={die.value}
              isHeld={die.isHeld}
              holdDice={() => holdDice(die.id)}
            />
          ))
        }
      </div>
      <button className='roll--btn' onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;
