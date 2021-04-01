import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from './kittensSlice';


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

export default function Pagination() {

  const totalPages = useSelector(state => state.kittens.totalPages);
  const currentPage = useSelector(state => state.kittens.currentPage);
  const dispatch = useDispatch();

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

  let showedPages = [1, 2, 3, 4, 5];

  if (currentPage > 3 && currentPage <= totalPages - 3) {
    showedPages = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
  };

  if (currentPage >= totalPages - 3) {
    showedPages = [totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1];
  };

  const PaginateItem = ({ number, onClick, active }) => {
    return (
      <SingleItem active={active} onClick={() => onClick()} >{number}</SingleItem>
    );
  };


  return (
    <div style={style.container}>
      <ul style={style.ul}>
        {
          currentPage >= 2 ?
            <li style={style.li} onClick={() => dispatch(changeCurrentPage(currentPage - 1))}>Prev</li>
            :
            <li></li>
        }
        {
          showedPages.map(pageNumber => {
            return (
              <PaginateItem number={pageNumber} key={pageNumber} onClick={() => dispatch(changeCurrentPage(pageNumber))} active={pageNumber === currentPage} />
            );
          })
        }

        {
          currentPage >= totalPages - 3 ? '' : <li style={style.li} className="emty">
            ...
            </li>
        }

        <PaginateItem
          active={totalPages === currentPage}
          number={totalPages}
          onClick={() => dispatch(changeCurrentPage(totalPages))}
          className="lastPage"
        />

        {
          currentPage < totalPages ?
            <li style={style.li} onClick={() => dispatch(changeCurrentPage(currentPage + 1))}>Next</li>
            :
            ""
        }
      </ul>
    </div>
  );
};