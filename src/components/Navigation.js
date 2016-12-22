import React from 'react';
import radium from 'radium';
const styles = {
  nav: {
    display: 'inlineBlock',
    margin: '60px auto 45px',
    backgroundColor: '#5597b4',
    boxShadow: '0 1px 1px #ccc',
    borderRadius: '2px',
  },
  link: {
    display: 'inline-block',
    padding: '18px 30px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    lineHeight: 1,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    transition: 'background-color 0.25s',
  }
};

const Navigation = () => (
  <nav style={styles.nav}>
    <a href="#" style={styles.link}>Home</a>
    <a href="#" style={styles.link}>Projects</a>
    <a href="#" style={styles.link}>Services</a>
    <a href="#" style={styles.link}>Contact</a>
  </nav>
);

export default radium(Navigation);
