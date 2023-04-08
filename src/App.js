import './components/css/App.css';
import Header from './components/dieComponents/Header';
import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';
import {React, useState, useEffect} from 'react';

function App() {

  // states
  const[dice,setDice] = useState(resetDice())
  const [tenzies, setTenzies] = useState(false);

  // game status validation
  useEffect(() => {

    const allHeld = dice.every(die => die.isHeld)
    const iniValue = dice[0].value;
    const currentDieValue = dice.map(die => die.value)

    const allSameValue = dice.every(iniValue === currentDieValue )
    if (allHeld && allSameValue === true){
      setTenzies(true);
      console.log('You Won')
    }
  },[dice])

  // //an array that generates 10 random numbers between 1-6

  function generateNewDie() {
    return {
      value: (Math.ceil(Math.random() * 6)),
      isHeld:false,
      id:nanoid()
    }
  }

  function resetDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  // //roll dice
  function rollDice(){
    setDice(oldDice => oldDice.map(die => {
      return (
        die.isHeld ? die : generateNewDie()
        )
    }))
  }

  // //holding dice value
  const holdDice =(id) =>{
    setDice(oldDice => oldDice.map(die =>{
      return (
        die.id === id ?
        {...die, isHeld: !die.isHeld}: die
        )
    }))
  }

  // rendering dice
  const diceElements = dice.map(die => {
      return (
        <Die
          key = {die.id}
          value ={die.value}
          isHeld ={die.isHeld}
          holdDice={() => holdDice(die.id)}
        />
      )
  })

  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        {diceElements}
      </div>
      <button
        className='roll--btn'
        onClick = {rollDice}
      >
        {tenzies ? "New Game": "Roll"}
        </button>
    </div>
  );
}

export default App;
