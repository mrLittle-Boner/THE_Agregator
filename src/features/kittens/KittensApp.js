import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchKittens, changeCurrentPage } from './kittensSlice';

const Tittle = styled.h3`
  text-align: center;
  color: teal;
  font-size: 28px;
  margin-bottom: 15px;
`;

const KittensList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
  column-gap: 12px;
  row-gap: 12px;
  padding: 0 12px;
`;

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

// const Likes = styled.div``;
// const Author = styled.div``;

const SingleItem = styled.li`
background-color: ${props => props.active ? 'white' : 'teal'};
color: ${props => props.active ? 'teal' : 'white'};
width: ${props => props.active ? '45px' : '40px'};
height: ${props => props.active ? '45px' : '40px'};
border: 1px solid teal;
display: flex;
font-size: 20px;
padding-bottom: 2px;
justify-content: center;
align-items: center;
cursor: pointer;
`;

const Pagination = () => {
  const totalPages = useSelector(state => state.kittens.totalPages);
  const currentPage = useSelector(state => state.kittens.currentPage);
  const dispatch = useDispatch();

  // const perPage = 12;
  // const pages = totalresults / perPage;


  const style = {
    container: {
      display: 'flex',
      paddingTop: '25px',
      paddingBottom: '25px',
      gap: '5px',
      justifyContent: 'center',
    },
    li: {
      backgroundColor: 'teal',
      color: 'white',
      width: '40px',
      height: '40px',
      display: 'flex',
      fontSize: '20px',
      paddingBottom: '2px',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    ul: {
      display: 'flex',
      justifyContent: 'center',
      gap: '5px',
      alignItems: 'center'
    }
  };

  // const click = () => {
  //   dispatch(changeCurrentPage(ClickedPage));
  //   loadDataWithNewCurrentPage();
  //   movePagination();
  // };

  const prevPage = currentPage >= 2 ? <li style={style.li} >Prev</li> : <div></div>;
  const nextPage = currentPage < totalPages ? <li style={style.li} >Next</li> : <div></div>;


  const showedPages = [1, 2, 3, 4, 5];


  const PaginateItem = ({ number, onClick, active }) => {
    return (
      <SingleItem active={active} onClick={() => onClick()} key={number} >{number}</SingleItem>
    );
  };


  return (
    <div style={style.container}>
      <ul style={style.ul}>
        {/* Rendered pagination from 1 to 5
        Position current page +2 and -2 5 pages */}
        {prevPage}
        {showedPages.map(pageNumber => {
          return (
            <PaginateItem number={pageNumber} onClick={() => dispatch(changeCurrentPage(pageNumber))} active={pageNumber === currentPage} />
          );
        })}

        <li style={style.li} className="emty">
          ...
        </li>
        <li style={style.li} className="lastPage">
          {totalPages}
        </li>
        <li style={style.li} >{nextPage}</li>
      </ul>
    </div>

  );
};

{/* <li onClick={(e) => {
  dispatch(changeCurrentPage(e.target.innerText));
  // console.log(e);
}
} style={style.li} >1</li>
<li style={style.li} >2</li>
<li style={style.li} >3</li>
<li style={style.li} >4</li>
<li onClick={(e) => {
  dispatch(changeCurrentPage(e.target.innerText));
  // console.log(e);
}
} style={style.li} >5</li> */}

const KittensCard = ({ url, descr, likes, user }) => {
  // const url = 'https://api.unsplash.com/search/photos?client_id=LH15d8SH5yZx5mOepZ_AsqRlsJYSXjLqwUAfChowbGs&query=kitten&page=2&per_page=12';

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

export default function KittensApp() {
  const kittensPhotos = useSelector(state => state.kittens.photos);
  const currentPage = useSelector(state => state.kittens.currentPage);
  const dispatch = useDispatch();

  // const hasContent = kittensPhotos.length >= 0


  // useEffect(() => {
  //   dispatch(fetchKittens(currentPage));
  // }, []);

  return (
    <section className='kittens'>
      <Tittle>Do you like kittens? I do and want to share this love with you!</Tittle>
      {kittensPhotos.length >= 0 ?
        <KittensList className='kittens__list'>
          {kittensPhotos.map(photo => {
            return (
              <KittensCard
                key={photo.id}
                url={photo.urls.regular}
                descr={photo.alt_description}
                likes={photo.likes}
                user={photo.user}
              />
            )
          })}
        </KittensList>
        :
        <div> Loading kittens </div>}
      <Pagination />
    </section>
  );
};
