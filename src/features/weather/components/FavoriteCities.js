import React from 'react';

export default function FavoriteCities() {
  return (
    <div>
      <div className='weather__favorites favorites'>
        <h3>Favorite Cities</h3>
        <input type="text" placeholder='Add Favorite City' />
        <ul>
          <li>Moscow</li>
          <li>New York</li>
          <li>Denver</li>
          <li>Los Angeles</li>
          <li>Orlando</li>
        </ul>
      </div>
    </div>
  );
};
