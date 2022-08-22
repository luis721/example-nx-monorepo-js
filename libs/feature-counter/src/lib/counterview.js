import { Card } from "@example-nx-monorepo-js/components";
import React from "react";
import Counter from "./counter";
import styles from "./counter.module.scss";

const CounterView = () => {
  const [counter, setCounter] = React.useState(0);

  const handleLess = () => {
    setCounter((c) => c - 1);
  };

  const handlePlus = () => {
    setCounter((c) => c + 1);
  };

  return (
    <div className={styles["main"]}>
      <Card>
        <Card.Title>Counter</Card.Title>
        <Card.Body>
          <Counter value={counter} onLess={handleLess} onPlus={handlePlus} md />
        </Card.Body>
      </Card>
    </div>
  );
};

export default CounterView;
