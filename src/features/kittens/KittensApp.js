import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchKittens } from './kittensSlice';

import Pagination from './Pagination';
import Gallery from './KittensGallery';

const Tittle = styled.h3`
  text-align: center;
  color: teal;
  font-size: 28px;
  margin-bottom: 15px;
`;

export default function KittensApp() {
  const currentPage = useSelector(state => state.kittens.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchKittens(currentPage));
  }, [currentPage]);

  return (
    <section className='kittens'>
      <Tittle>Do you like kittens? I do and want to share this love with you!</Tittle>
      <Gallery />
      <Pagination />
    </section>
  );
};
