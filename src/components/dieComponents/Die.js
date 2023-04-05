import React from 'react';


export default function Die(props) {

  const[dice, setDice] = React.useState(allNewDice())

  const holdDice =(id) =>{
    setDice(oldDice => oldDiceDice.map(die =>{
      return die.id === id ?
      {...die, isHeld: !die.isHeld}:
      die
    }))
  }

  const diceElements = Die.map(die => (
    <Die
      key={die.id}
      value ={value.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  return (
    <div className='dice--face'>
      <h2 className='die--num'>{diceElements}</h2>
    </div>
  )
}
