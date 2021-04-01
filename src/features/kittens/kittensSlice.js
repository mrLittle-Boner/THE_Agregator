import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPages: 21,
  loadingStatus: 'idle',
  photos: []
};

export const fetchKittens = createAsyncThunk(
  'kittens/fetchKittens',
  async (pageNumber, thunkAPI) => {
    const url = `https://api.unsplash.com/search/photos?client_id=LH15d8SH5yZx5mOepZ_AsqRlsJYSXjLqwUAfChowbGs&query=kitten&page=${pageNumber}&per_page=16`;
    const responseData = await fetch(url).then(data => data.json());
    return responseData;
  }
);

const kittensSlice = createSlice({
  name: 'kittens',
  initialState,
  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  },
  extraReducers: {
    [fetchKittens.pending]: (state, action) => {
      state.loadingStatus = 'pending';
    },
    [fetchKittens.fulfilled]: (state, action) => {
      state.totalPages = action.payload.total_pages;
      state.photos = action.payload.results;
      state.loadingStatus = 'idle';
    },
    [fetchKittens.reject]: (state, action) => {

    },
  }
});


export const { changeCurrentPage } = kittensSlice.actions;
export default kittensSlice.reducer;