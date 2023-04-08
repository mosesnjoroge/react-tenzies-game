import './components/css/App.css';
import Header from './components/dieComponents/Header';
import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';
import {React, useState, useEffect} from 'react';

function App() {

  // states
  const[dice,setDice] = useState(resetDice())
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {

    const allHeld = dice.every(die => die.isHeld)

    const iniValue = () => {
      return dice[0].value
    }

    const currentDieValue = dice.map(die => {
      return die.value
    })

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
      newDice.push(Math.ceil(Math.random() * 6))
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
        <Die value ={die.number} />
        )
  })

  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        {diceElements}
      </div>
      <button className='roll--btn' onClick = {rollDice}>Roll</button>
    </div>
  );
}

export default App;
