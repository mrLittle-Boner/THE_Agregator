import TopNav from '../Nav/TopNav';

const styles = {
  header: {
    backgroundColor: 'teal',
    color: 'white',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px'
  },
  title: {
    fontSize: '32px',
    paddingBottom: '8px',
  },
};
export default function Header() {
  return (
    <header style={styles.header} className='header'>
      <div className='container header__container'>
        <div style={styles.content} className="header__content">
          <div style={styles.title} className='header__title'>
            THE_Agregator
          </div>
          <TopNav />
        </div>
      </div>
    </header>
  )
}
