import React from 'react';
import { completeAll, clearAll, clearCompleted } from '../todosSlice';
import { showAll, showCompleted, showActive } from '../filtersSlice';
import { useDispatch } from 'react-redux';

const styles = {
  filters: {
    maxWidth: '550px',
    margin: '15px auto 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px'
  },
  filterButton: {
    border: '1px solid teal',
    backgroundColor: 'white',
    color: 'teal',
    padding: '5px 0',
    cursor: 'pointer',
    transition: 'all .9s ease'
  }
};

const hoverOn = (e) => {
  let styleTargetNode = e.target.style;
  styleTargetNode.backgroundColor = 'teal';
  styleTargetNode.color = 'white';
  styleTargetNode.borderColor = 'goldenrod';
};

const hoverOff = (e) => {
  let styleTargetNode = e.target.style;
  styleTargetNode.backgroundColor = 'white';
  styleTargetNode.color = 'teal';
  styleTargetNode.borderColor = 'teal';
};


const FilterButton = ({ handleClick, children }) => {

  return (
    <button
      onMouseOver={e => hoverOn(e)}
      onMouseLeave={e => hoverOff(e)}
      onClick={() => handleClick()}
      className='filters__btn' style={styles.filterButton}>{children}</button>
  );
};

export default function FilterButtons() {
  const dispatch = useDispatch();

  return (
    <div className='filters ' style={styles.filters}>
      <FilterButton handleClick={() => dispatch(showAll())}>Show All</FilterButton>
      <FilterButton handleClick={() => dispatch(clearCompleted())}>Clear Completed</FilterButton>
      <FilterButton handleClick={() => dispatch(showActive())}>Show Active</FilterButton>
      <FilterButton handleClick={() => dispatch(completeAll())}>Completed All</FilterButton>
      <FilterButton handleClick={() => dispatch(showCompleted())}>Show Completed</FilterButton>
      <FilterButton handleClick={() => dispatch(clearAll())}>Clear All</FilterButton>
    </div>
  );
};
