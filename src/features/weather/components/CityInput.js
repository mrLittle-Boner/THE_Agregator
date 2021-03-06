import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../weatherSlice';


const styles = {
  search: {
    maxWidth: '550px',
    margin: '15px auto 0',
    display: 'flex'
  },
  input: {
    flexGrow: '1',
    padding: '5px 20px',
    fontSize: '21px'
  },
  searchBtn: {

  }
};

export default function CityInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(inputValue));

    setInputValue('');
  };

  return (
    <form style={styles.search} onSubmit={(e) => handleSubmit(e)} className='weather__input search'>
      <input
        style={styles.input}
        onChange={(e) => setInputValue((e.target.value))}
        className='search__input'
        value={inputValue}
        type='text'
        placeholder='City , zip-code or '
      />
      <button type='submit'>Check</button>
    </form>
  );
};
