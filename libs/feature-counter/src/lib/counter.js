import { Button } from "@example-nx-monorepo-js/components";
import styles from "./counter.module.scss";

export const Counter = ({ value, onLess, onPlus, ...props }) => {
  const size = props.md ? styles["md"] : styles["sm"];

  return (
    <div className={`${styles["container"]} ${size}`} {...props}>
      <Button onClick={onLess}>-</Button>
      <div className={styles["value"]}>{value}</div>
      <Button onClick={onPlus}>+</Button>
    </div>
  );
};

export default Counter;
