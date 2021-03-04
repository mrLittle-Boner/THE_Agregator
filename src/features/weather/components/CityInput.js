import React from 'react';

const styles = {
  search: {
    maxWidth: '550px',
    margin: '15px auto 0',
  },
  input: {
    width: '100%',
    padding: '5px 20px',
    fontSize: '21px'
  }
};

export default function CitiInput() {
  return (
    <div style={styles.search} className='weather__input search'>
      <input
        style={styles.input}
        className='search__input'
        type='text'
        placeholder='Citie , zip-code or '
      />
    </div>
  );
};
