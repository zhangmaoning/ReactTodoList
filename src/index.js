import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList"
require('./mocks/mock.js') 
ReactDOM.render(<TodoList />, document.getElementById('root'));

