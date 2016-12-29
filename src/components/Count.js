import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  nav: {
    margin: '20px auto',
    backgroundColor: '#5597b4',
    boxShadow: '0 1px 1px #ccc',
    borderRadius: '2px',
    padding: '10px',
  },
  content: {
    margin: '5px auto',
    display: 'table',
  },
};

const Count = ({ money }) => (
  <div>
    <div style={styles.nav}>
      <div style={styles.content}>
        共计{money}元
      </div>
    </div>
    <div style={styles.nav}>
      <div style={styles.content}>
        去付款
      </div>
    </div>
  </div>
);

Count.propTypes = {
  money: PropTypes.number.isRequired,
};

export default radium(Count);
