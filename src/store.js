import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todoApp/todosSlice';
import filtersReducer from './features/todoApp/filtersSlice';

export const store = configureStore({
  reducer: { todos: todosReducer, filters: filtersReducer },
});