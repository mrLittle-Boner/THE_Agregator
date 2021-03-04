import React from 'react';

const styles = {
  card: {
    maxWidth: '550px',
    margin: '15px auto 0',
    // border: '1px solid teal',
    color: 'white',
    backgroundColor: 'teal',
    padding: '10px 20px'
  },
  daytime: {
    marginTop: '10px',
    height: '200px',
    backgroundColor: 'goldenrod'
  },
  condition: {
    backgroundColor: 'tomato',
    width: '50px', height: '50px',
    position: 'relative',
    top: '-25px',
    left: 'calc(50% - 25px)'
  }
}

export default function WeatherCard() {
  return (
    <div style={styles.card} className='weather__info card'>
      <h3 className='card__city-name'>Lubertsy Stolica Mira</h3>
      <div style={styles.daytime} className='card__image-container'>
        <img src='' alt='' className='card__image' />
          day/night
        </div>
      <div style={styles.condition} className='card__condition'>
        Sunny/rainy/cloudly Image
      </div>
      <div className='card__details'>
        <span className='card__temperature'>36 &#8451;</span>
        <span className='card__other'>Other details</span>
      </div>
    </div>
  );
};
