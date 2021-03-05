import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件：没有业务逻辑的纯UI组件；
const TodoListUI = props => {
  return (
    <div>
      <div style={{ margin: '10px' }}>
        <Input
          placeholder={props.inputValue}
          style={{ width: '350px', marginRight: '10px' }}
          value={props.inputValue}
          onFocus={props.inputFocus}
          onChange={props.changeInputValue}
          onKeyUp={props.enterAddList}
        ></Input>
        <Button type="primary" onClick={props.addList}>
          增加
        </Button>
      </div>
      <div style={{ margin: '10px', width: '450px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              key={index}
              actions={[]}
              onClick={() => {
                props.delItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default TodoListUI;
