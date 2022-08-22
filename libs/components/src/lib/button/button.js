import styles from "./button.module.scss";

export const Button = ({ onClick, children, color = "primary", ...props }) => {
  return (
    <button
      onClick={onClick}
      className={styles["container"] + " " + styles[color]}
    >
      {children}
    </button>
  );
};

export default Button;
