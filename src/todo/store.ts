import { AnyAction, createStore } from "redux";

export type State = {};
export const initalState: State = {};
export function reducer(state = initalState, action: AnyAction): State {
  switch (action.type) {
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
