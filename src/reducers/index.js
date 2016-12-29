import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import errorMessage from './errorMessage';
import entities from './entities';
import counter from './counter';
import menu from './menu';

const rootReducer = combineReducers({
  routing: routerReducer,
  errorMessage,
  entities,
  counter,
  menu,
});


export default rootReducer;
