import React from 'react';
import AddTodoForm from './AddTodoForm';
import FilterButtons from './FilterButtons';

import TodoList from './TodoList';

const styles = {
  title: {
    textAlign: 'center',
    color: 'teal',
    fontSize: '28px',
  },
};

export default function TodoApp() {
  return (
    <section className='todos'>
      <h2 style={styles.title} className='todos__title'>All we need is TodoApp and love ofcourse!</h2>
      <AddTodoForm />
      <TodoList />
      <FilterButtons />
    </section>
  );
};
