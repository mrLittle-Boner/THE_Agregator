import { combineReducers } from 'redux';

import todos from './features/todoApp/todosSlice';
import filters from './features/todoApp/filtersSlice';

import weatherInfo from './features/weather/weatherSlice';

export default combineReducers({
  todos,
  filters,
  weatherInfo,
});
