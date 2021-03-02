import React from 'react';

const styles = {
  footer: {
    backgroundColor: 'teal',
    color: 'white'
  },
  footerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px'
  }
};

export default function Footer() {
  return (
    <footer style={styles.footer} className='footer'>
      <div className="container">
        <div style={styles.footerContent} className="footer__content">
          <div className="rights">
            &copy; All rights here.
          </div>
          <div className="footer__author">
            All code done by mrLittleBoner(me);
          </div>
        </div>
      </div>
    </footer>
  );
};
