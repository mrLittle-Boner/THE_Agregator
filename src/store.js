import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

// import todoReducer from './features/todoApp/todoAppReducer';
// import weatherReducer from './features/weather/weatherSlice';

// import todosReducer from './features/todoApp/todosSlice';
// import filtersReducer from './features/todoApp/filtersSlice';

export const store = configureStore({
  // reducer: { todos: todosReducer, filters: filtersReducer },
  reducer: rootReducer,
});