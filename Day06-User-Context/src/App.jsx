import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import Todos from './components/Todos'
import { TodoProvider, useTodo } from './contexts/TodosContext'

function App() {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (todo) => {
    setTasks((prev) => [{...todo}, ...prev]);
    // console.log(tasks)
  }

  const editTask = (id, todo) => {
    console.log("in edit")
    setTasks((prev) => prev.map((taskElem) => taskElem.id === id ? {...taskElem, task: todo} : taskElem));
  }
  
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((taskElem) => taskElem.id !== id));
  }

  const toggleComplete = (id) => {
    setTasks((prev) => prev.map((taskElem) => taskElem.id === id ? {...taskElem, completed: !taskElem.completed} : taskElem));
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Todos'))
    if (data && data.length > 0)
      setTasks(data)
  }, []);

  useEffect(() => {
    console.log("setting storage")
    localStorage.setItem('Todos', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <TodoProvider value={{tasks, addTask, editTask, deleteTask, toggleComplete}}>
      <div className='container'>
        <h1>To-do list</h1>

        <div className="input-container">
          {/* input component */}
          <Input />
        </div>

        <div className="todo-container">
          {/* todos comes here */}
          {tasks.map((taskElem) => (
            <Todos task = {taskElem} key={taskElem.id} />
          ))}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App