export const ADD_TODO = "ADD_TODO";
export const addTodoAction = (todo:string) => ({
  type: "ADD_TODO",
  payload: todo,
});
