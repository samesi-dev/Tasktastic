import React,{useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);

    }
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
      };
  
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id ){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })

        setTodos(updatedTodos);
    }

    return (
    <div className="list-group">
        <TodoForm onSubmit={addTodo}/>
        <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo} />
   
    </div>
    );
}



export default TodoList;