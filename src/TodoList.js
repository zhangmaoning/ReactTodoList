import React, { Component } from 'react';
import 'antd/dist/antd.css';
import TodoListUI from './TodeListUI';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import store from './redux';
import api from './api/api.js';
import {
  changeInputAction,
  inputFocusAction,
  addListAction,
  delItemAction,
  getListAction
} from './redux/actionCreator.js';

const IconText = ({ icon }) => (
  <span>
    {React.createElement(icon, {
      style: { color: '#1890ff', fontSize: '16px' }
    })}
  </span>
);
class TodoList extends Component {
  constructor(props) {
    super(props);
    //获取store里面的值
    this.state = store.getState();

    this.storeChange = this.storeChange.bind(this);
    this.inputFocus = this.inputFocus.bind(this);
    this.enterAddList = this.enterAddList.bind(this);
    this.addList = this.addList.bind(this);
    this.delItem = this.delItem.bind(this);
    // 订阅模式-将store中数据的改变同步到组件
    this.changeInputValue = this.changeInputValue.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        inputFocus={this.inputFocus}
        changeInputValue={this.changeInputValue}
        enterAddList={this.enterAddList}
        addList={this.addList}
        list={this.state.list}
        delItem={this.delItem}
      />
    );
  }
  // 生命周期函数-加载完
  componentDidMount() {
    api.mockdata('/data/index').then(res => {
      console.log(res,"肖战");
    });
  }
  storeChange() {
    this.setState(store.getState());
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  inputFocus() {
    const action = inputFocusAction();
    store.dispatch(action);
  }
  enterAddList(e) {
    if (e.keyCode === 13) {
      this.addList();
    }
  }
  addList() {
    const action = addListAction();
    store.dispatch(action);
  }
  delItem(index) {
    const action = delItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;
