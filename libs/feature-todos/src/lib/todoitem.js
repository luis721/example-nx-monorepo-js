import { Icon } from "@example-nx-monorepo-js/components";
import styles from "./todosview.module.scss";

const TodoItem = ({ name, onEdit, onDelete }) => {
  return (
    <div className={styles["todo-item"]}>
      <span>{name}</span>
      <div className={styles["icons"]}>
        <Icon icon="edit" onClick={onEdit} />
        <Icon icon="close" onClick={onDelete} />
      </div>
    </div>
  );
};

export default TodoItem;
