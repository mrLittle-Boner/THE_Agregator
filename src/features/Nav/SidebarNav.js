import React from 'react';

const styles = {
  list: {
    backgroundColor: 'teal',
    color: 'white',
    fontSize: '22px',
    marginLeft: '-10px',
    minWidth: '320px'
  },
  item: {

  },
  link: {
    display: 'flex',
    padding: '8px 10px',
    borderBottom: '1px solid white'
  }
}

export default function SidebarNav() {
  return (
    <ul style={styles.list} className='sidebar-nav'>
      <li className='sidebar-nav__item'>
        <a style={styles.link} className='sidebar-nav__link' href="/">
          Home / About
        </a>
      </li>
      <li>
        <a style={styles.link} href="todos">
          Todo App
        </a>
      </li>
      <li>
        <a style={styles.link} href="weather">
          Weather App
        </a>
      </li>
      <li>
        <a style={styles.link} href="currency">
          CurrencyApp
        </a>
      </li>
      <li>
        <a style={styles.link} href="equvilent">
          Table Users
        </a>
      </li>
    </ul>
  )
}
