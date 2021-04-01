import React from 'react';
import styled from 'styled-components';

const KittensItem = styled.li`
  color: white;
  background-color: teal;
  display: flex;
  flex-direction: column;
`;

const KittensIMG = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const KittensInfo = styled.div`
  padding: 8px 12px;
  display: flex;
  word-break: break-word;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

export default function KittensCard({ url, descr, likes, user }) {

  return (
    <KittensItem className='kittens__item'>
      <KittensIMG className='kittens__item-img' src={url} alt={descr} />
      <KittensInfo className="kittens__item-info">
        <div className="author">
          <div>Author: </div>
          <div><a rel="noreferrer" target='_blank' href={user.links.html}> {user.username} </a></div>
        </div>

        <div className="likes">
          <div>Likes: {likes}</div>
        </div>

      </KittensInfo>
    </KittensItem>
  );
};