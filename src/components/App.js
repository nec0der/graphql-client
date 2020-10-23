import React from 'react';
import './App.css';
import TodoList from '../containers/TodoList';
import AddTodo from '../containers/AddTodo';

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Todo App</h1>
        <AddTodo/>
      </header>
      <section className='main'>
        <TodoList/>
      </section>
    </div>
  );
}

export default App;
