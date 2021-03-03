import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../todosSlice';

const styles = {
  item: {
    borderBottom: '1px solid teal',
    marginTop: '8px',
    fontSize: '18px',
    display: 'flex',
  },
  checkboxContainer: {
    cursor: 'pointer',
    marginRight: '10px',
    border: '1px solid teal',
    borderBottom: 'none',
    padding: '0 9px',
  },
  list: {
    maxWidth: '550px',
    margin: '15px auto 0'
  },
  close: {
    cursor: 'pointer',
    marginLeft: 'auto',
    fontSize: '20px',
    padding: '0 9px',
    border: '1px solid teal',
    borderBottom: 'none',
    color: 'red',
    backgroundColor: ' white'
  }
};

const ListItem = ({ completed, id, text }) => {
  const dispatch = useDispatch();

  return (
    <li style={styles.item}>
      <label style={styles.checkboxContainer} >
        <input onChange={() => dispatch(toggleTodo(id))} type='checkbox' checked={completed} />
      </label>
      {text}
      <button onClick={() => dispatch(removeTodo(id))} style={styles.close}> &times; </button>
    </li>
  );
};

export default function TodoList() {

  const todos = useSelector(state => state.todos);
  const showedTodos = todos.map(todo => <ListItem completed={todo.completed} id={todo.id} key={todo.id} text={todo.text} />);

  return (
    <ul style={styles.list}>
      {showedTodos}
    </ul>
  );
};
