import {
  CAHNGEINPUTVALJUE,
  INPUTFOCUS,
  ADDITEM,
  DELITEM,
  GETLISTACTION
} from './actionTypes.js';
export const changeInputAction = value => ({
  type: CAHNGEINPUTVALJUE,
  value
});
export const addListAction = value => ({
  type: ADDITEM,
  value
});
export const delItemAction = value => ({
  type: DELITEM,
  value
});
export const inputFocusAction = value => ({
  type: INPUTFOCUS,
  value
});
export const getListAction = value => ({
  type: GETLISTACTION,
  value
});