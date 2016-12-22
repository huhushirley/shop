import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';


const Root = (props) => {
  const { store, history } = props;

  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.any.isRequired,
  history: PropTypes.any.isRequired
};

export default Root;
