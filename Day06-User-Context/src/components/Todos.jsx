import React, { useState } from 'react'
import { useTodo } from '../contexts/TodosContext'

function Todos({ task }) {

  const[isEditable, setIsEditable] = useState(false);
  const[editedTask, setEditedTask] = useState(task.task)
  const { editTask, deleteTask, toggleComplete } = useTodo();

  const edit = () => {
    if (task.completed)  return

    if (isEditable)
      editTask(task.id , editedTask)
    setIsEditable((prev) => !prev)
  }

  const del = () => {
    deleteTask(task.id)
  }

  const toggle = () => {
    toggleComplete(task.id)
  }

  return (
    <div className='todo-contain'>
        <input type="checkbox" checked={task.completed} onChange={toggle} />
        <input id='tsk' type="text" value={editedTask} readOnly={!isEditable} onChange={(e) => setEditedTask(e.target.value)} />
        <button id='editBtn' onClick={edit} >{isEditable ? "save" : "edit"}</button>
        <button id='delBtn' onClick={del}>delete</button>
    </div>
  )
}

export default Todos