export const ADD_TODO = "ADD_TODO";
export const addTodoAction = (todo: string) => ({
  type: "ADD_TODO",
  payload: todo,
});
export const CHANGE_TODO = "CHANGE_TODO";
export const changeTodo = (id: number, done: boolean) => ({
  type: "CHANGE_TODO",
  payload: { id, done },
});
