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
          <a href='/' className='top-nav__link'>
            Home
          </a>
        </li>
        <li className='top-nav__item'>
          <a href='kittens' className='top-nav__link'>
            Cute Kittens
          </a>
        </li>
      </ul>
    </nav>
  );
};
