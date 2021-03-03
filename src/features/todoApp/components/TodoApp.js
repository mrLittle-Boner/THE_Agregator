import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, removeTodo, completeTodo } from '../todosSlice';

const styles = {
  title: {
    textAlign: 'center',
    color: 'teal',
    fontSize: '28px',
  },
  input: {
    display: 'flex',
    marginTop: '15px'
  },
  inputField: {
    padding: '6px 10px 5px 4px',
    fontSize: '20px'
  },
  addBtn: {
    padding: '0 7px',
    fontSize: '20px',
    color: 'white',
    border: 'none',
    backgroundColor: 'teal'
  }
};

export default function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [inputValue, setInputValue] = useState('');
  let [nextId, setNextId] = useState(10);

  const showedTodos = todos.map(todo => {
    return <li key={todo.id}>{todo.text}</li>
  });

  const handleInputFieldChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmitTodosForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue, nextId));

    setNextId(nextId += 1);
    setInputValue('');
  };

  return (
    <section className='todos'>
      <h2 style={styles.title} className='todos__title'>All we need is TodoApp and love ofcourse!</h2>
      <div  >
        <form onSubmit={(e) => handleSubmitTodosForm(e)} className='todos__form' style={styles.input} action="">
          <input style={styles.inputField}
            value={inputValue}
            onChange={(e) => handleInputFieldChange(e)}
            type='text'
            placeholder='Todo to do' />
          <button style={styles.addBtn} type='submit'>+1</button>
        </form>
      </div>
      <div>
        <ul>
          {showedTodos}
        </ul>
      </div>
      <div>
        <button>Show all</button>
        <button>Show Active</button>
        <button>Show Completed</button>
        <button>Clear All</button>
        <button>Completed All</button>
        <button>Mark as Important</button>
      </div>
    </section>
  );
};
