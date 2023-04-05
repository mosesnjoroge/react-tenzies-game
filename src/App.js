import './components/css/App.css';
import Header from './components/dieComponents/Header';
import NewDie from './components/dieComponents/Newdie';
import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {

  // const [tenzies, setTenzies] = React.useState(false);
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
    return (
      newDice
      );
    }

  // const holdDice =(id) =>{
  //   setDice(oldDice => oldDiceDice.map(die =>{
  //     return die.id === id ?
  //     {...die, isHeld: !die.isHeld}:
  //     die
  //   }))
  // }
  const diceElements = Die.map(die => (
    <Die
    key={die.id}
    value ={die}
    isHeld={die.isHeld}
    // holdDice={() => holdDice(die.id)}
    />
    ))

  function rollDice(){
    setDice(allNewDice())
  }

  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        {diceElements}
      </div>
      <NewDie/>
      <button className='roll--btn' onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;
