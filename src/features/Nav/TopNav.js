import { NavLink } from 'react-router-dom';


const styles = {
  list: {
    display: 'flex',
    fontSize: '24px',
    gap: '15px'
  }
};

export default function TopNav() {
  return (
    <nav className='top-nav'>
      <ul style={styles.list} className='top-nav__list'>
        <li className='top-nav__item'>
          <NavLink to='/' className='top-nav__link'> Home </NavLink>
        </li>
        <li className='top-nav__item'>
          <NavLink to='/kittens' className='top-nav__link'> Cute Kittens </NavLink>
        </li>
      </ul>
    </nav>
  );
};
