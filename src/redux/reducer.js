import {
  CAHNGEINPUTVALJUE,
  INPUTFOCUS,
  ADDITEM,
  DELITEM,
  GETLISTACTION
} from './actionTypes.js';
// 定义了一些固定的数据
const defaultState = {
  inputValue: 'Write Something',
  list: [
    '早上8点开晨会，分配项目',
    '早上9点开晨会，分配项目',
    '早上10点开晨会，分配项目',
    '早上11点开晨会，分配项目'
  ]
};
// Reducer里只能接收state，不能改变state；
// Reducer 是纯函数--纯函数是指返回值有参数决定的函数；
export default (state = defaultState, action) => {
  if (action.type === CAHNGEINPUTVALJUE) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === INPUTFOCUS) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = '';
    return newState;
  }
  if (action.type === ADDITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === DELITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }
  if (action.type === GETLISTACTION) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list=action.list;
    return newState;
  }
  return state;
};
