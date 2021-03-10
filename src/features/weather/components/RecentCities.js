import React from 'react';
import { useSelector } from 'react-redux';

const styles = {
  list: {

  },
  city: {
    backgroundColor: 'teal',
    color: 'white',
    marginTop: '5px',
    display: 'flex',
  },
  cityText: {
    fontSize: '18px',
    padding: '2px 5px',
    cursor: 'pointer',
    flexGrow: '1'
  },
};

const LastCitiesItem = ({ children }) => {
  return (
    <li style={styles.city}>
      <span style={styles.cityText}>{children}</span>
    </li>

  );
};

const LastCitiesList = () => {
  const cities = useSelector(state => state.weatherInfo.lastCities);
  const renderedCities = cities.map(city => <LastCitiesItem>{city}</LastCitiesItem>);
  return (
    <ul>
      { cities ? renderedCities : ''}

    </ul>
  );
};

export default function LatesCities() {
  return (
    <div className='weather__viewed lates'>
      <h3>Recently Viewed Cities</h3>
      <LastCitiesList />
    </div>
  );
};
