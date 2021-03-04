import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../todosSlice';

const styles = {
  input: {
    maxWidth: '550px',
    margin: '15px auto 0px',
    display: 'flex',
  },
  inputField: {
    padding: '6px 10px 5px 4px',
    fontSize: '20px',
    flexGrow: '1',
  },
  addBtn: {
    padding: '0 7px',
    fontSize: '20px',
    color: 'white',
    border: 'none',
    backgroundColor: 'teal'
  }
};

export default function AddTodoForm() {
  const [inputValue, setInputValue] = useState('');
  let [nextId, setNextId] = useState(10);

  const dispatch = useDispatch();

  const handleSubmitTodosForm = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      dispatch(addTodo(inputValue, nextId));
      setNextId(nextId += 1);
      setInputValue('');
    } else { }
  };

  return (
    <form onSubmit={(e) => handleSubmitTodosForm(e)} className='add-todo' style={styles.input}>
      <input className='add-todo__input' style={styles.inputField}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
        required
        placeholder='Todo to do' />
      <button className='add-todo__btn' style={styles.addBtn} type='submit'>+1</button>
    </form>
  );
};
