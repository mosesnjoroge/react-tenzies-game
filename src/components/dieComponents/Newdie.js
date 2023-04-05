import React from 'react';


export default function Newdie() {

  const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDice())
    }
  return (
    <div>
      {newDice}
    </div>

  );
}
