import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from 'components';
import { menuActions } from 'actions';


const MenuApp = () => (
  <Navigation />
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
