import styles from "./modal.module.scss";

export const Modal = (props) => {
  return (
    <div
      className={styles["container"]}
      style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className={styles["content"]}>{props.children}</div>
    </div>
  );
};

Modal.Head = ({ children }) => {
  return <div className={styles["head"]}>{children}</div>;
};
Modal.Head.displayName = "Modal.Head";

Modal.Body = ({ children }) => {
  return <div className={styles["body"]}>{children}</div>;
};
Modal.Body.displayName = "Modal.Body";

Modal.Footer = ({ children }) => {
  return <div className={styles["footer"]}>{children}</div>;
};
Modal.Footer.displayName = "Modal.Footer";

// *
Modal.CloseIcon = ({ onClick }) => {
  return <span className={styles["close-icon"]} onClick={onClick}></span>;
};
Modal.CloseIcon.displayName = "Modal.CloseIcon";
