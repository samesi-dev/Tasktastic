import React,{useState} from 'react';
import './TodoForm.css';
import { FiPlus } from 'react-icons/fi';

const TodoForm = (props) => {

  const [input, setInput] = useState("");

  const handleChange =  e => {
    setInput(e.target.value);
  }

  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    
    setInput('')
  };


    return (<div>
       <div className="container">
          <div className="inner">
          <form className="todo-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="todo-input"
          placeholder="Write something, don't be shy!" 
          name="text"
          value={input}
          onChange={handleChange}
         />
          <button onClick={handleSubmit} className="plus-icon">
           <FiPlus />
          </button>
      </form>
  
          </div>
       </div>
    
    </div>)
}



export default TodoForm;