import styles from "./input.module.scss";

export function Input(props) {
  return <input className={styles["input"]} {...props} />;
}
export default Input;
