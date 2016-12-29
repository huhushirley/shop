import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Navigation,
  List,
  Count,
 } from 'components';
import { menuActions } from 'actions';

const menuItems = [
  {
    title: '套餐',
    group: [
      {
        name: '汉堡加可乐',
        detail: '香辣味',
        money: 26,
        tip: '',
        pic: '',
      },
      {
        name: '充电堡加雪碧',
        detail: '芥末味',
        money: 30,
        tip: '',
        pic: '',
      },
      {
        name: '汉堡加芬达',
        detail: '原味',
        money: 26,
        tip: '',
        pic: '',
      },
      {
        name: '汉堡加可乐',
        detail: '香辣味加冰',
        money: 26,
        tip: '',
        pic: '',
      },
    ]
  },
  {
    title: '主食',
    group: [
      {
        name: '超大汉堡',
        detail: '香辣味',
        money: 26,
        tip: '',
        pic: '',
      },
    ]
  },
  {
    title: '小吃',
    group: [
      {
        name: '超大汉堡',
        detail: '香辣味',
        money: 26,
        tip: '',
      },
    ]
  },
  {
    title: '饮料',
    group: [
      {
        name: '超大汉堡',
        detail: '香辣味',
        money: 26,
        tip: '',
        pic: '',
      },
    ]
  },
];

const MenuApp = () => (
  <div>
    <Navigation list={menuItems} />
    <List list={menuItems} number={2} />
    <Count money={100} />
  </div>
);

MenuApp.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: bindActionCreators(menuActions, dispatch)
  })
)(MenuApp);
