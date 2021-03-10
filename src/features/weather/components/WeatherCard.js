import React from 'react';
import { useSelector } from 'react-redux';
import { weatherIcons } from '../weatherIcons';

const styles = {
  card: {
    maxWidth: '550px',
    margin: '15px auto 0',
    backgroundColor: 'teal',
    padding: '10px 20px',
    color: 'white'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cityName: {
    fontSize: '32px',
  },
  imgContainer: {
    height: '50px'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'none'
  },
  temp: {
    fontSize: '32px'
  },
  others: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,1fr)',
    rowGap: '10px',
    columnGap: '20px',
    marginTop: '15px',
    paddingBottom: '5px'
  },
  condition: {
    marginTop: '5px',
    textTransform: 'capitalize'
  },
  date: {
    marginTop: '5px',
    textTransform: 'capitalize'
  }

};

export default function WeatherCard() {
  const weather = useSelector(state => state.weatherInfo.data);

  const { name, dt, timezone } = weather;
  const {
    temp,
    humidity,
    pressure,
  } = weather.main;

  const weekDay = new Date((dt + (timezone)) * 1000).toLocaleDateString('en-US', { weekday: 'long' });
  const { icon, description } = weather.weather[0];

  return (
    <div style={styles.card} className='weather__info card'>
      <div style={styles.content} className='card__city'>

        <h3 style={styles.cityName} className='card__city-name'>
          {name}, {weather.sys.country}
        </h3>

        <div style={styles.temp} className='city__temp'>
          {Math.round(temp)}&#8451;
        </div>

        <div style={styles.imgContainer} className='card__city-condition'>
          <img style={styles.img} src={weatherIcons[icon]} alt="" />
        </div>

        <div style={styles.condition} className='card__'>
          {description}
        </div>

        <div style={styles.date} className="city__daytime" >
          {weekDay}
        </div>

        <ul style={styles.others} className="city__other">
          <li>Wind: {weather.wind.speed}m/s</li>
          <li>Pressure: {pressure}hPa</li>
          <li>Humidity: {humidity}%</li>
          <li>Cloudness: {weather.clouds.all}%</li>
        </ul>
      </div>
    </div>
  );
};
