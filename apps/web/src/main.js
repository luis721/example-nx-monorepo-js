import CounterView from "@example-nx-monorepo-js/feature-counter";
import TodosView from "@example-nx-monorepo-js/feature-todos";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<CounterView />} />
        <Route path="/todos" element={<TodosView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
