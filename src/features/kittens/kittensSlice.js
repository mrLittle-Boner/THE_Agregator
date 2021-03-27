import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: '1',
  totalPages: '425',
  photos: [
    {
      id: 1,
      altDescription: 'white and gray kitten on bed',
      //take urls.regular
      url: 'https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgwNTl8MHwxfHNlYXJjaHwxMXx8a2l0dGVufGVufDB8fHx8MTYxNjc1MDMwOA&ixlib=rb-1.2.1&q=80&w=1080',
      likes: 480,
      //user.username
      photographer: 'tim_huim'
    },
    {
      id: 2,
      altDescription: 'short-haired black and white cat',
      url: 'https://images.unsplash.com/photo-1568035105640-89538ccccd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTgwNTl8MHwxfHNlYXJjaHwxMnx8a2l0dGVufGVufDB8fHx8MTYxNjc1MDMwOA&ixlib=rb-1.2.1&q=80&w=1080',
      likes: 405,
      photographer: 'ne_tim_huim'
    },
  ]
};

const kittensSlice = createSlice({
  name: 'kittens',
  initialState,
  reducers: {

  }
});


// export const { } = kittensSlice.actions;
export default kittensSlice.reducer;