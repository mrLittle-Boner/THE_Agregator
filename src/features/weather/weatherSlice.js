import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherLoading: 'idle',
  data: {
    dt: 1614929156,
    main: {
      temp: 37,
      feels_like: 40,
      humidity: 74,
      pressure: 1005,
      temp_max: 42,
      temp_min: 38
    },
    name: 'Moscow',
    sys: {
      country: 'RU',
      sunrise: 1614917448,
      sunset: 1614957095
    },
    clouds: {
      clouds: {
        all: 5
      }
    },
    weather: [
      {
        description: 'light snow',
        icon: '13d',
      }
    ],
    wind: { deg: 280, speed: 5 }
  },
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city) => {
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
  },
  extraReducers: {
    // [fetchWeather.pending]: (state, action) => {
    //   state.weatherLoading = 'pending';
    // },
    [fetchWeather.fulfiled]: (state, action) => {
      // state.data = { ...action.payload }
      console.log(action.payload);
      state.weatherLoading = 'idle';
      return action.payload;
    },
  }
});

export const { weatherDataLoading, weatherDataRecived } = weatherSlice.actions;
export default weatherSlice.reducer;

