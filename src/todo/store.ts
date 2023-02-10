import { AnyAction, createStore } from "redux";
import { ADD_TODO, CHANGE_TODO } from "./Action";
import { Todo } from "./Todo";

export type State = { todo: Todo[] };
export const initalState: State = {
  todo: [],
};
let nextId = 1;
export function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case ADD_TODO: {
      const todotext = action.payload;
      const todos: Todo = { id: nextId++, title: todotext, done: false };
      return {
        ...state,
        todo: [...state.todo, todos],
      };
    }
    case CHANGE_TODO: {
      const { id, done } = action.payload;
      const todochange = state.todo.map((t) => {
        if (t.id == id) {
          return { ...t, done: !done };
        }
        console.log("t", t);

        return t;
      });
      console.log("todos", todochange);
      return { ...state, todo: todochange };
    }
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
