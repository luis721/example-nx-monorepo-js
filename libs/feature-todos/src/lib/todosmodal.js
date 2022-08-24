import { Button, Input, Modal } from "@example-nx-monorepo-js/components";
import update from "immutability-helper";
import React from "react";
import styles from "./todosview.module.scss";

const TodosModal = ({ todo, onSave, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Head>
        <h3>{todo?.id ? "Edit Item" : "Create Item"} </h3>
        <Modal.CloseIcon onClick={onClose} />
      </Modal.Head>
      <TodosForm onCancel={onClose} todo={todo} onSave={onSave} />
    </Modal>
  );
};

export default TodosModal;

const TodosForm = ({ todo, onCancel, onSave }) => {
  const initialValues = (values) => {
    return {
      id: values?.id,
      name: values?.name ?? "",
      description: values?.description ?? "",
    };
  };

  const [values, setValues] = React.useState(() => initialValues(todo));

  React.useEffect(() => {
    setValues(initialValues(todo));
  }, [todo]);

  const handleField = (field) => (e) => {
    setValues((current) =>
      update(current, {
        [field]: { $set: e.target.value },
      })
    );
  };

  const handleSubmit = () => {
    onSave(values);
    handleReset();
  };

  const handleReset = () => {
    setValues(initialValues);
  };

  return (
    <React.Fragment>
      <Modal.Body>
        <div className={styles["form"]}>
          <Input
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleField("name")}
          />
          <Input
            name="descripcion"
            placeholder="Description"
            value={values.description}
            onChange={handleField("description")}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Save</Button>
        <Button color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </React.Fragment>
  );
};
