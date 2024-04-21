import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

const TodoApp = () => {
    return (
        <>
            <div className="container">
                <h1>Add Todo</h1>
                <TodoInput />
            </div>
        </>
    )
}

export default TodoApp