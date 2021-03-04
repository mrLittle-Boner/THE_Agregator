import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentFilter: '',
  all: 'all',
  completed: 'completed',
  active: 'active'
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    showAll(state, action) {
      state.currentFilter = state.all
    },
    showCompleted(state, action) {
      state.currentFilter = state.completed
    },
    showActive(state, action) {
      state.currentFilter = state.active
    }
  },
});

export const { showAll, showActive, showCompleted } = filtersSlice.actions;
export default filtersSlice.reducer;