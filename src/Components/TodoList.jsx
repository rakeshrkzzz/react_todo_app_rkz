import React from 'react'

const TodoList = ({ todoList, setTodoList }) => {

    const onDelete = (item, i) => {
        let tempArr = todoList.filter((todo) => {
            return todo != item;
        })
        setTodoList(tempArr)
    }

    return (
        <>
            {todoList.map((todo, index) => {
                return (
                    <div key={index} id="todoList" className='todo-item'>
                        <span>{todo}</span>
                        <i className="fas fa-trash delete-icon"
                            onClick={(e) => {
                                e.preventDefault();
                                onDelete(todo, index);
                            }}
                        ></i>
                    </div>
                )
            })}
        </>
    )
}

export default TodoList