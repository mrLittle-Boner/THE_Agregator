import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Card from './KittensCard';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  column-gap: 12px;
  row-gap: 12px;
  padding: 0 12px;
`;

export default function Gallery() {
  const photos = useSelector(state => state.kittens.photos);

  return (
    <>
      {
        photos.length >= 0 ?
          <List className='kittens__list'>
            {photos.map(photo => {
              return (
                <Card
                  key={photo.id}
                  url={photo.urls.small}
                  descr={photo.alt_description}
                  likes={photo.likes}
                  user={photo.user}
                />
              )
            })}
          </List>
          :
          <div> Loading kittens </div>
      }
    </>
  );
};