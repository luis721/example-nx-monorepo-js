import { Subject } from "rxjs";

const subject = new Subject();

const initialState = {
  todos: [],
};

let state = initialState;

const todosStore = {
  init: () => subject.next(state),
  subscribe: (setState) => subject.subscribe(setState),
  addItem: (item) => {
    state = {
      ...state,
      todos: [...state.todos, item],
    };
    subject.next(state);
  },
  clearTodos: () => {
    state = initialState;
    subject.next(state);
  },
};

export default todosStore;
