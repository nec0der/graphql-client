import React from 'react';
import { useQuery } from '@apollo/client';
import Todo from './Todo'
import {TODOS_QUERY} from './TodoQueries'


const Todos = () => {
    const {loading, data, error } = useQuery(TODOS_QUERY)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Ooops... Something went wrong =(</div>
    
    return (
        <div>
            <ul className="todo-list">
                {data.todos.map((todo) => <Todo key={todo.id} {...todo} />)}
            </ul>
        </div>
    );
};

export default Todos;