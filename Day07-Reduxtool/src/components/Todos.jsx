import { useSelector, useDispatch } from 'react-redux'
import { updateTodo, completeTodo, delTodo } from '../features/todoSlice';

function Todos({ editing, setEditing, eid, setEid, eTitle, seteTitle }) {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleEdit = (todoId, todoTitle) => {
        setEditing((prev) => true)
        console.log("editing = > true")
        setEid(todoId)
        seteTitle(todoTitle)
    }

  return (
    <div className='todo-container'>
        {todos.map((todo) => (
            <div className='todo' key={todo.id}>
                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(completeTodo(todo.id))} />

                <h5>{todo.title}</h5>

                <button className='edBtn' onClick={() => handleEdit(todo.id, todo.title)} >edit</button>
                <button className='edBtn' onClick={() => dispatch(delTodo(todo.id))} >delete</button>
            </div>
        ))}
    </div>
  )
}

export default Todos