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


  return (
    <div className='dice--face'>
      <h2 className='die--num'>{props}</h2>
    </div>
  )
}
