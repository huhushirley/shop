import {
  // add food number
  ADD_FOOD_NUMBER,
  // reduce food number
  REDUCE_FOOD_NUMBER,
  // change menu
  CHANGE_MENU,
} from 'constants';

export const onAddNumber = (idx, number) => ({
  type: ADD_FOOD_NUMBER,
  idx,
  number,
});

export const onReduceNumber = (idx, number) => ({
  type: REDUCE_FOOD_NUMBER,
  idx,
  number,
});

export const changeMenu = (index) => ({
  type: CHANGE_MENU,
  index,
});
