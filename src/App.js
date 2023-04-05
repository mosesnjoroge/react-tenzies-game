import './components/css/App.css';
import Header from './components/dieComponents/Header';
import NewDie from './components/dieComponents/Newdie';
import Die from './components/dieComponents/Die';
import { nanoid } from 'nanoid';

function App() {

  const[dice, setDice] = React.useState(allNewDice())

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld:false,
      id:nanoid()
    }
  }

  function allNewDie() {
    const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDice())
    }
    return newDice
    }

    function holdDice(id) {
      setDice(oldDice => oldDiceDice.map(die =>{
        return die.id === id ?
        {...die, isHeld: !die.isHeld}:
        die
      }))
    }

    function diceElements = dice.map(die => (
      <Die
        key={die.id}
        value ={value.id}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    ))

  return (
    <div className="App">
      <Header />
      <div className= 'dice-container'>
        {diceElements}
      </div>
      <button className='roll--btn' onClick={rollDice}>Roll</button>
    </div>
  );
}

export default App;
