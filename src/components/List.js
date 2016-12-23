import React from 'react';
import radium from 'radium';
import { TableViewCell, Media } from 'react-uikit-web';

const styles = {
  root: {
    marginTop: '20px',
    boxShadow: '0 1px 1px #ccc',
    borderRadius: '2px',
    height: '70px',
    backgroundColor: '#e35885',
  },
  tableViewCell: {
    padding: '10px',
  },
  contentMiddle: {
    marginLeft: '10px',
    display: 'inline-block',
  },
  contentRight: {
    marginLeft: '30%',
    display: 'inline-block',
  },
};

const List = () => (
  <div style={styles.root}>
    <TableViewCell
      style={styles.tableViewCell}
      imageView={
        <Media
          src="http://qiniu.daguchuangyi.com/weather/live/check.png"
          rounded
          width={50}
        />
      }
    >
      <div style={styles.contentMiddle}>
        <div>🍔</div>
        <div>我很好吃😯</div>
      </div>
      <div style={styles.contentRight}>
        <div>$26</div>
        <div> + 0 - </div>
      </div>
    </TableViewCell>
  </div>
);

export default radium(List);
