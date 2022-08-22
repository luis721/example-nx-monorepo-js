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
    setTodos((current) =>
      update(current, { $push: [{ ...todo, id: current.length }] })
    );
    setCurrentTodo(null);
    setIsOpen(false);
  };

  return (
    <div className={styles["center"]}>
      <div className={styles["container"]}>
        <Card>
          <Card.Title>Todos</Card.Title>
          <Card.Body>
            <TodoList todos={todos} setCurrentTodo={setCurrentTodo} />
          </Card.Body>
        </Card>
        <div className={styles["btn-add"]}>
          <Button onClick={toggleIsOpen}>Add Item</Button>
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

const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <div className={styles["no-items"]}>There aren't any items.</div>;
  }
  return map(todos, (todo) => (
    <TodoItem
      key={todo.id}
      id={todo.id}
      name={todo.name}
      status={todo.status}
    />
  ));
};
