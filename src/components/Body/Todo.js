import React from 'react';

import { RiCloseCircleLine } from 'react-icons/ri';


const Todo = ({ todos, completeTodo, removeTodo }) => {


  return todos.map((todo, index) => (
    <div
      className={'TodoItem'}
      key={index}
    >
      <div className="TodoItem_checkbox"  key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div >
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />

      </div>
    </div>
  ));
};

export default Todo;