import { AnyAction, createStore } from "redux";
import { ADD_TODO } from "./Action";
import { Todo } from "./Todo";

export type State = { todo: Todo[] };
export const initalState: State = {
  todo: [],
};
let nextId = 1;
export function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
    case ADD_TODO:
      const todotext = action.payload;

      return {
        ...state,
        todo: [...state.todo, { id: nextId++, title: todotext, done: false }],
      };
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
