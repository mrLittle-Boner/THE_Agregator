import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, text: 'Learn React', completed: false, isImportant: false },
  { id: 7, text: 'Learn Redux', completed: false, isImportant: false },
  { id: 2, text: 'Learn other cool stuff', completed: false, isImportant: false },
  { id: 3, text: 'Get Work in cool company', completed: false, isImportant: false },
  { id: 4, text: 'Rich Goals and Dreams', completed: false, isImportant: false },
  { id: 5, text: 'Take Kayfi', completed: false, isImportant: false },
  { id: 6, text: 'Write a awesome code', completed: false, isImportant: false },
];


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // addTodo(state, action) {
    //   const { text, id } = action.payload;
    //   return state.push({ text, id, completed: false, isImportant: false });
    // },
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
        return state;
      },
      prepare: (text, id) => {
        const todo = { text, id, completed: false, isImportant: false };
        return { payload: todo };
      }
    },
  }
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;