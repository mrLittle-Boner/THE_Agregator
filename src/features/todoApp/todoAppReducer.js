import { combineReducers } from 'redux';

import todos from './todosSlice';
import filters from './filtersSlice';

const todoAppReducer = combineReducers({
  todos,
  filters
});

export default todoAppReducer;