import { createReducer } from 'utils';
import {
  // add food number
  ADD_FOOD_NUMBER,
  // reduce food number
  REDUCE_FOOD_NUMBER,
} from 'constants';


export default createReducer({
  number: [],
  statusText: '',
}, {
  [ADD_FOOD_NUMBER]: (state) => ({
    ...state,
    statusText: '数量加一',
  }),
  [REDUCE_FOOD_NUMBER]: (state) => ({
    ...state,
    statusText: '数量减一',
  }),
});
