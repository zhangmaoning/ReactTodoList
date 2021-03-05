// 创建store仓库，reducer注入
import {createStore} from 'redux'
import reducer from "./reducer.js"
const store =createStore(reducer);
export default store;
// store 是唯一的
// 只有store能改变state，reducer不能