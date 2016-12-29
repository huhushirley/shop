import React, { PropTypes } from 'react';
import radium from 'radium';
import {
  TableViewCell,
  Media,
  SvgIcon,
} from 'react-uikit-web';
import { AddIcon, DropdDownIcon } from 'paths';


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
    float: 'right',
    marginRight: '20px',
    display: 'inline-block',
  },
};

const List = ({ list, number }) => (
  <div>
  {list[0].group.map((menu, idx) =>
    <div key={idx} style={styles.root}>
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
          <div>{menu.name}</div>
          <div>{menu.detail}</div>
        </div>
        <div style={styles.contentRight}>
          <div>${menu.money}</div>
          <div>
            <SvgIcon
              style={styles.icon}
              path={AddIcon}
              mb={1}
            />{number}
            <SvgIcon
              style={styles.icon}
              path={DropdDownIcon}
              mb={1}
            />
          </div>
        </div>
      </TableViewCell>
    </div>
    )}
  </div>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
  number: PropTypes.number.isRequired,
};

export default radium(List);
