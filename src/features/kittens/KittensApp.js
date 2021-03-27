import React from 'react';
import { useSelector } from 'react-redux';

export default function KittensApp() {
  const kittens = useSelector(state => state.kittens);
  return (
    <section className='kittens'>
      <h2>Do you like kittens? I do and want to share this love with you!</h2>
      <ul className='kittens__list'>
        <li className='kittens__item'>
          <img className='kittens__item-img' src={kittens.photos[0].url} alt={kittens.photos[0].altDescription} />
          <div className="kittens__item-info">
            <span className="kittens__item-likes">Likes : {kittens.photos[0].likes}</span>
            <span className="kittens__item-author">Photographer : {kittens.photos[0].photographer}</span>
          </div>
        </li>
        <li className='gallery__item'>
          <img src={kittens.photos[1].url} alt={kittens.photos[1].altDescription} />
          <div className="kittens__item-info">
            <span className="kittens__item-likes">Likes : {kittens.photos[1].likes}</span>
            <span className="kittens__item-author">Photographer : {kittens.photos[1].photographer}</span>
          </div>
        </li>
      </ul>
    </section>
  );
};
