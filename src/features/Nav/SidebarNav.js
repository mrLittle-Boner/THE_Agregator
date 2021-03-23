import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  list: {
    backgroundColor: 'teal',
    color: 'white',
    fontSize: '22px',

    minWidth: '320px'
  },
  item: {

  },
  link: {
    justifyContent: 'center',
    display: 'flex',
    padding: '8px 10px',
    borderBottom: '1px solid white'
  }
}
const SideBarLink = ({ path, name, exact }) => {
  return (
    <li>
      <NavLink style={styles.link} exact={exact} to={path}> {name} </NavLink>
    </li>
  );
};

export default function SidebarNav() {
  return (
    <ul style={styles.list} className='sidebar-nav'>
      <SideBarLink name='Home' path='/' exact />
      <SideBarLink name='Todo App' path='/todos' />
      <SideBarLink name='Weather' path='/weather' />
      <SideBarLink name='Money Flow' path='/money' />
      <SideBarLink name='Users Table' path='/users-table' />
    </ul>
  )
}
