import './components/css/App.css';
import Header from './components/dieComponents/Header';
import NewDie from './components/dieComponents/Newdie';
import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';
import { React,useEffect } from 'react';

function App() {

  const [tenzies, setTenzies] = React.useState(false);

  useEffect(() => {
    console.log('Dice state changed')
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld:false,
      id:nanoid()
    }
  }

  const diceElements = Die.map(die => (
    <Die
      key={die.id}
      value ={value.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  // function rollDice() {
  //   onchange
  // }
  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        {diceElements}
      </div>
      <NewDie/>
      {/* <button className='roll--btn' onClick={rollDice}>Roll</button> */}
    </div>
  );
}

export default App;
