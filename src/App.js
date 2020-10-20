import React from 'react';
import './App.css';
import Todos from './Todos';
import AddTodo from './AddTodo'

function App() {
  return (
    <div className='app'>
      <header>
        <h1>Todo App</h1>
        <AddTodo/>
      </header>
      <section className='main'>
        <Todos/>
      </section>
    </div>
  );
}

export default App;
