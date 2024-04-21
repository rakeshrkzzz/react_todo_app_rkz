import React, { useState } from 'react'
import TodoList from './TodoList'

const TodoInput = () => {

    const [todoInput, setTodoInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const onInput = (e) => {
        e.preventDefault();
        setTodoInput(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        let tempArr = todoList;
        if (todoInput != "") {
            tempArr.push(todoInput)
            setTodoList(tempArr);
        }
        setTodoInput("");
    }

    return (
        <>
            <form id="todoForm" onSubmit={onAdd}>
                <input type="text" id="todoInput" onChange={onInput} value={todoInput} placeholder="Enter your todo..." />
                <input type="submit" value="Add Todo" />
            </form>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </>
    )
}

export default TodoInput