import styles from "./card.module.scss";

export const Card = (props) => {
  return <div className={styles["card"]}>{props.children}</div>;
};

Card.Title = (props) => {
  return <div className={styles["title"]}>{props.children}</div>;
};

Card.Body = (props) => {
  return <div className={styles["body"]}>{props.children}</div>;
};

export default Card;
