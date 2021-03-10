import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  weatherLoading: 'idle',
  data: {},
  lastCities: [
    // 'Moscow', 'Huston', 'Denver', 'Berlin', 'Honolulu'
  ],
  favoriteCities: [
    // 'Rome',
    // 'Moscow',
    // 'Huston',
    // 'Denver',
    // 'Berlin',
    // 'Honolulu',
  ]
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city, thunkAPI) => {
    const APIKey = '3d38b14f2f05a2d872e989f3eae86274';
    const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    changeSearchInput(state, action) {
      state.searchValue = action.payload;
    },
    addFavCity: {
      reducer(state, action) {
        state.favoriteCities.push(action.payload);
      },
      prepare(inputValue) {
        const nextId = uuidv4();
        const capitalizedInput = inputValue[0].toUpperCase() + inputValue.slice(1);
        return { payload: { name: capitalizedInput, id: nextId } }
      }
    },
    romoveFavCity(state, action) {
      state.favoriteCities = state.favoriteCities.filter(city => city.id !== action.payload);
    },
    addRecentCity(state, action) {
      // let cities = state.weatherinfo.lastCities;
      // cities.push(action.payload);
      // cities = [...cities.slice(-4)];

      if (state.weatherinfo.lastCities.lenght >= 5) {
        state.weatherinfo.lastCities = [action.payload, ...state.weatherinfo.lastCities.slice(1, 4)]
      } else {
        state.weatherinfo.lastCities.push(action.payload);
      }
    }
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.weatherLoading = 'pending';
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.weatherLoading = 'idle';
      state.data = action.payload;
    },
    [fetchWeather.rejected]: (state, action) => {
      console.log(action.error);
    },
  }
});

export const { addRecentCity, romoveFavCity, addFavCity, setWeatherInfoFromFetch } = weatherSlice.actions;
export default weatherSlice.reducer;

