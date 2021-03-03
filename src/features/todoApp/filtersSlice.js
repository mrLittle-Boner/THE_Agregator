import { createSlice } from "@reduxjs/toolkit";
const initialState = {

  all: 'All',
  completed: 'completed',
  active: 'active'

};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    showMeFilters(state, action) {
      return state;
    }
  },
});

export const { showMeFilters } = filtersSlice.actions;
export default filtersSlice.reducer;