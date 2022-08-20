import styles from "./button.module.scss";

export const Button = ({ onClick, children, ...props }) => {
  return (
    <button onClick={onClick} className={styles["container"]} {...props}>
      {children}
    </button>
  );
};

export default Button;
