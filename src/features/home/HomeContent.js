import React from 'react';

const styles = {
  home: {
    padding: '0 10px',
    fontSize: '20px'
  },
  title: {
    textAlign: 'center',
    color: 'teal',
    fontSize: '32px',
    marginBottom: '25px'
  },
  text: {
    // display: 'flex',
    // justifyContent: 'space-between',
    textAlign: 'center'
  },
  about: {
    maxWidth: '80%',
    margin: '0 auto'
  },
  technologies: {
    textAlign: 'center',
    marginTop: '15px'
  },
  list: {
    marginTop: '10px'
  }
};

export default function HomeContent() {
  return (
    <section style={styles.home} className='home'>
      <h1 style={styles.title} className='home__title'>
        Hello and welcome to my React/Redux Project
      </h1>
      <div style={styles.text} className="home__text">
        <p style={styles.about} className='home__about'>
          Here is project witch contains another small projects , list of projects in left side of this SPA its use react router for switching between small ones.
        </p>
        <div style={styles.technologies} className='home__technologies'>
          <p>This project was written with next stack:</p>
          <ul style={styles.list} className='home__technologies-list'>
            <li>Create React App</li>
            <li>React</li>
            <li>React router</li>
            <li>Redux</li>
            <li>React-redux</li>
            <li>Redux Toolkit</li>
            <li>Redux devtools</li>
          </ul>
        </div>
      </div>

    </section>
  );
};
