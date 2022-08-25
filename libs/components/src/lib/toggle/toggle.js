import styles from "./toggle.module.scss";

export function Toggle({ isActive, onToggle }) {
  return (
    <input
      className={styles["toggle"]}
      type="checkbox"
      onChange={onToggle}
      value={isActive}
    />
  );
}
export default Toggle;
