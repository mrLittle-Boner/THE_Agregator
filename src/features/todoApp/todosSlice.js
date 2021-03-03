import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, text: 'Learn React', completed: true, isImportant: false },
  { id: 7, text: 'Learn Redux', completed: false, isImportant: false },
  { id: 2, text: 'Learn other cool stuff', completed: false, isImportant: false },
  { id: 3, text: 'Get Work in cool company', completed: false, isImportant: false },
  { id: 4, text: 'Rich Goals and Dreams', completed: true, isImportant: false },
  { id: 5, text: 'Take Kayfi', completed: false, isImportant: false },
  { id: 6, text: 'Write a awesome code', completed: false, isImportant: false },
];


const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text, id) => {
        const todo = { text, id, completed: false, isImportant: false };
        return { payload: todo };
      }
    },
    removeTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleTodo(state, action) {
      state.map(todo => todo.id === action.payload ? todo.completed = !todo.completed : todo)
    }
  }
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;