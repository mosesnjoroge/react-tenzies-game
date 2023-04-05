import React from 'react';
// import Button from 'react-bootstrap/Button';
// import  Container  from 'react-bootstrap/Container';

export default function Newdie() {

  const newDice = []
    for (let i = 0; i < 10; i++){
      newDice.push(generateNewDice())
    }
  return (
    <div>
      {newDice}
    </div>
    // <Container>
    //   <Button variant="primary">Roll</Button>
    // </Container>
  );
}
