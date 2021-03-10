import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { romoveFavCity, addFavCity, fetchWeather } from '../weatherSlice';
// import { v4 as uuidv4 } from 'uuid';

const styles = {
  favCities: {

  },
  city: {
    backgroundColor: 'teal',
    color: 'white',
    marginTop: '5px',
    display: 'flex',
    // alignItems: 'center'
  },
  cityText: {
    fontSize: '18px',
    padding: '2px 5px',
    cursor: 'pointer',
    flexGrow: '1'
  },
  favCityInput: {
    padding: '2px 5px',
    fontSize: '18px',
    marginTop: '5px',
  },
  deleteBtn: {
    color: 'red',
    fontSize: '18px',
    width: '31px',
    cursor: 'pointer',
  },
  addCityBtn: {
    position: 'absolute',
    zIndex: '-100',
    opacity: '0'
  }
};

const FavoriteCitiesInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(addFavCity(inputValue));
      setInputValue('');
    }}>
      <input
        style={styles.favCityInput}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder='Add Favorite City' />
      <button style={styles.addCityBtn}>Add City</button>
    </form>
  );
};

const FavoriteCity = ({ children, fetchWeather, removeCity }) => {
  return (
    <li style={styles.city} >
      <span style={styles.cityText} onClick={() => fetchWeather()}>{children}</span>
      <button onClick={() => removeCity()} style={styles.deleteBtn}>&times;</button>
    </li>
  );
};

const FavoriteCitiesList = () => {
  const cities = useSelector(state => state.weatherInfo.favoriteCities);
  const dispatch = useDispatch();

  return (
    <ul>
      {cities.map(city => {
        return <FavoriteCity
          fetchWeather={() => dispatch(fetchWeather(city.name))}
          removeCity={() => dispatch(romoveFavCity(city.id))}
          key={city.id}
          id={city.id}> {city.name} </FavoriteCity>
      })}
    </ul>
  );
};

export default function FavoriteCities() {
  return (
    <div>
      <div className='weather__favorites favorites'>
        <h3>Favorite Cities</h3>
        <FavoriteCitiesInput />
        <FavoriteCitiesList />
      </div>
    </div>
  );
};
