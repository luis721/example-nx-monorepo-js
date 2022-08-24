import styles from "./icons.module.scss";

export function Icon({ icon, onClick }) {
  return (
    <span onClick={onClick} className={`${styles["icon"]} ${styles[icon]}`} />
  );
}
export default Icon;
