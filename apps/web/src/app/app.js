import { Card } from "@example-nx-monorepo-js/components";
import { Link } from "react-router-dom";
import styles from "./app.module.scss";

const App = () => {
  return (
    <div className={styles["container"]}>
      <Card>
        <Card.Title>Home</Card.Title>
        <Card.Body>
          <Link to="/counter">Counter</Link>
          <Link to="/todos">Todos</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
