import React from 'react';
import CityInput from './CityInput';
import FavoriteCities from './FavoriteCities';
import LatesCities from './RecentCities';
import WeatherCard from './WeatherCard';
import { useSelector } from 'react-redux';

const styles = {
  title: {
    textAlign: 'center',
    color: 'teal',
    fontSize: '28px'
  },
  cities: {
    maxWidth: '550px',
    margin: '15px auto 0',
    justifyContent: 'space-between',
    display: 'flex',
    padding: '10px 20px',
    border: '1px solid teal'
  },
  noWeather: {
    textAlign: 'center',
    marginTop: '15px'
  }
};

const NoWeatherDataMessage = () => {
  return (
    <div style={styles.noWeather}>No search data yet, please use search bar above!</div>
  );
};

export default function WeatherApp() {
  const weatherInfo = useSelector(state => state.weatherInfo.data);
  const isWeatherDataExist = Boolean(Object.values(weatherInfo).length);

  return (
    <section className='weather'>
      <h2 style={styles.title} className='weather__title'>And how we can without WeatherApp ? </h2>
      <CityInput />
      {isWeatherDataExist ? <WeatherCard /> : <NoWeatherDataMessage />}
      <div style={styles.cities} className='weather__cities'>
        <LatesCities />
        <FavoriteCities />
      </div>
    </section>
  );
};
