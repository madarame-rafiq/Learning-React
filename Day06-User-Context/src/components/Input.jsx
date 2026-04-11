import React, { useState } from 'react'
import { useTodo } from '../contexts/TodosContext'

function Input() {

  const [task, setTask] = useState("");

  const { addTask } = useTodo();

  const add = (e) => {
    e.preventDefault()
    if (task)
      addTask({id: Date.now(), task: task, completed: false})
    setTask("")
  }

  return (
    <form onSubmit={add}>
        <input type="text" id='userInput' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type='submit' id='createTask'>create</button>
    </form>
  )
}

export default Input