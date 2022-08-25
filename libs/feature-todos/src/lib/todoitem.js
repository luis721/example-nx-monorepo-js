import { Icon, Toggle } from "@example-nx-monorepo-js/components";
import styles from "./todosview.module.scss";

const TodoItem = ({ name, isComplete, onToggle, onEdit, onDelete }) => {
  return (
    <div className={styles["todo-item"]}>
      <div className={styles["info"]}>
        <Toggle isActive={isComplete} onToggle={onToggle} />
        <span>{name}</span>
      </div>
      <div className={styles["icons"]}>
        <Icon icon="edit" onClick={onEdit} />
        <Icon icon="close" onClick={onDelete} />
      </div>
    </div>
  );
};

export default TodoItem;
