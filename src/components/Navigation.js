import React, { PropTypes } from 'react';
import radium from 'radium';
const styles = {
  nav: {
    display: 'inlineBlock',
    margin: '20px auto',
    backgroundColor: '#5597b4',
    boxShadow: '0 1px 1px #ccc',
    borderRadius: '2px',
    padding: '10px',
  },
  link: {
    display: 'table-cell',
    width: '25%',
    color: '#fff',
    padding: '0px 8px',
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    lineHeight: 1,
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    transition: 'background-color 0.25s',
  },
  content: {
    margin: '0px auto',
    display: 'table',
  }
};

const Navigation = ({
  list,
}) => {
  const element = list.map((category, idx) =>
    <a key={idx} href="#" style={styles.link}>{category.title}</a>
);
  return (
    <nav style={styles.nav}>
      <div style={styles.content}>
        {element}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  list: PropTypes.array.isRequired,
};

export default radium(Navigation);
