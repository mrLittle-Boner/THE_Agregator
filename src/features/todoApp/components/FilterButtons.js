import React from 'react';

const styles = {
  filters: {
    maxWidth: '550px',
    margin: '15px auto 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px'
  },
  filterButton: {
    fontSize: '22px',
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


const FilterButton = ({ children }) => {

  return (
    <button
      onMouseOver={e => hoverOn(e)}
      onMouseLeave={e => hoverOff(e)}
      className='todos__filters-btn' style={styles.filterButton}>{children}</button>
  );
};

export default function FilterButtons() {
  return (
    <div className='todos__filters ' style={styles.filters}>
      <FilterButton>Show All</FilterButton>
      <FilterButton>Clear Completed</FilterButton>
      <FilterButton>Show Active</FilterButton>
      <FilterButton>Completed All</FilterButton>
      <FilterButton>Show Completed</FilterButton>
      <FilterButton>Clear All</FilterButton>
    </div>
  );
};
