import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  totalPages: 0,
  // perPage: 16,
  loadingStatus: 'idle',
  photos: [
    // {
    //   id: 1,
    //   altDescription: 'white and gray kitten on bed',
    //   //take urls.regular
    //   url: 'https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgwNTl8MHwxfHNlYXJjaHwxMXx8a2l0dGVufGVufDB8fHx8MTYxNjc1MDMwOA&ixlib=rb-1.2.1&q=80&w=1080',
    //   likes: 480,
    //   //user.username
    //   photographer: 'tim_huim'
    // },
    // {
    //   id: 2,
    //   altDescription: 'short-haired black and white cat',
    //   url: 'https://images.unsplash.com/photo-1568035105640-89538ccccd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgwNTl8MHwxfHNlYXJjaHwxMnx8a2l0dGVufGVufDB8fHx8MTYxNjc1MDMwOA&ixlib=rb-1.2.1&q=80&w=1080',
    //   likes: 405,
    //   photographer: 'ne_tim_huim'
    // },
    // {
    //   id: 3,
    //   altDescription: 'white and gray kitten on bed',
    //   url: 'https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgwNTl8MHwxfHNlYXJjaHwxMXx8a2l0dGVufGVufDB8fHx8MTYxNjc1MDMwOA&ixlib=rb-1.2.1&q=80&w=1080',
    //   likes: 480,
    //   photographer: 'tim_huim'
    // },
    // {
    //   id: 4,
    //   altDescription: 'short-haired black and white cat',
    //   url: 'https://images.unsplash.com/photo-1568035105640-89538ccccd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgwNTl8MHwxfHNlYXJjaHwxMnx8a2l0dGVufGVufDB8fHx8MTYxNjc1MDMwOA&ixlib=rb-1.2.1&q=80&w=1080',
    //   likes: 405,
    //   photographer: 'ne_tim_huim'
    // },
  ]
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