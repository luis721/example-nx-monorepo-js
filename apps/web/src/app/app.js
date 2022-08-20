import { Card, Counter } from "@prueba/components";
import React from "react";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const handleLess = () => {
    console.log(2);
    setCounter((c) => c - 1);
  };

  const handlePlus = () => {
    console.log(1);
    setCounter((c) => c + 1);
  };

  return (
    <Card>
      <Card.Title>Counter</Card.Title>
      <Card.Body>
        <Counter value={counter} onLess={handleLess} onPlus={handlePlus} md />
      </Card.Body>
    </Card>
  );
};

export default App;
