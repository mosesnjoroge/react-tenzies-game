import './components/css/App.css';
import Header from './components/dieComponents/Header';
import NewDie from './components/dieComponents/Newdie';
import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

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

    // function holdDice(id) {
    //   setDice(oldDice => oldDiceDice.map(die =>{
    //     return die.id === id ?
    //     {...die, isHeld: !die.isHeld}:
    //     die
    //   }))
    // }

    // function diceElements = dice.map(die => (
    //   <Die
    //     key={die.id}
    //     value ={value.id}
    //     isHeld={die.isHeld}
    //     holdDice={() => holdDice(die.id)}
    //   />
    // ))

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
