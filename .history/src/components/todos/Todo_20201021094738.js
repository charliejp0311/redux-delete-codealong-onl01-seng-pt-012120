import React from 'react'

const Todo = props => {
    console.log(props)
    return(
    <div>
        <span>{props.text}</span>
        <button onClick={()=>props.delete(props.todo.id)}>DELETE</button>
    </div>
    )}

export default Todo;