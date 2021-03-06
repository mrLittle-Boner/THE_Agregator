import React from 'react';
import CityInput from './CityInput';
import FavoriteCities from './FavoriteCities';
import LatesCities from './LatesCities';
import WeatherCard from './WeatherCard';

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
  }
};

export default function WeatherApp() {

  return (
    <section className='weather'>
      <h2 style={styles.title} className='weather__title'>And how we can without WeatherApp ? </h2>
      <CityInput />
      <WeatherCard />
      <div style={styles.cities} className='weather__cities'>
        <LatesCities />
        <FavoriteCities />
      </div>
    </section>
  );
};
