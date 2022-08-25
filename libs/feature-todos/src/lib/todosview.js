import { Button, Card } from "@example-nx-monorepo-js/components";
import update from "immutability-helper";
import map from "lodash.map";
import React from "react";
import TodoItem from "./todoitem";
import TodosModal from "./todosmodal";
import styles from "./todosview.module.scss";

function TodosView({ items }) {
  const [todos, setTodos] = React.useState([]);
  const [currentTodo, setCurrentTodo] = React.useState(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleIsOpen = () => {
    setIsOpen((c) => !c);
  };

  const onSaveTodo = (todo) => {
    setTodos((current) => {
      let index = current.findIndex((e) => e.id === todo.id);
      if (todo.id) {
        return update(current, { [index]: { $set: todo } });
      }
      return update(current, {
        $push: [
          {
            ...todo,
            id: (current[current.length - 1]?.id ?? 0) + 1,
            isComplete: false,
          },
        ],
      });
    });
    setCurrentTodo(null);
    setIsOpen(false);
  };

  const onCreate = () => {
    setCurrentTodo();
    toggleIsOpen();
  };

  const onEditTodo = (index) => () => {
    setCurrentTodo(todos[index]);
    toggleIsOpen();
  };

  const onToggleTodo = (index) => () => {
    setTodos((current) =>
      update(current, { [index]: { isComplete: { $apply: (c) => !c } } })
    );
  };

  const onDeleteTodo = (index) => () => {
    setTodos((current) => update(current, { $splice: [[index, 1]] }));
  };

  return (
    <div className={styles["center"]}>
      <div className={styles["container"]}>
        <Card>
          <Card.Title>Todos</Card.Title>
          <Card.Body>
            <TodoList
              todos={todos}
              setCurrentTodo={setCurrentTodo}
              onEdit={onEditTodo}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          </Card.Body>
        </Card>
        <div className={styles["btn-add"]}>
          <Button onClick={onCreate}>Add Item</Button>
        </div>
      </div>
      <TodosModal
        todo={currentTodo}
        isOpen={isOpen}
        onSave={onSaveTodo}
        onClose={toggleIsOpen}
      />
    </div>
  );
}

export default TodosView;

const TodoList = ({ todos, onEdit, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return <div className={styles["no-items"]}>There aren't any items.</div>;
  }
  return (
    <div className={styles["list"]}>
      {map(todos, (todo, index) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          isComplete={todo.isComplete}
          onToggle={onToggle(index)}
          onEdit={onEdit(index)}
          onDelete={onDelete(index)}
        />
      ))}
    </div>
  );
};
