import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from '../features/todoSlice';

function Todoform({ editing, setEditing, eid, setEid, eTitle, seteTitle }) {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault()
        if (title)
          if(!editing){
            dispatch(addTodo(title))
            console.log("Not editing created new task");
          }
          else{
            console.log(`The valuye of title:- ${title}`)
            dispatch(updateTodo({id: eid, newTitle: title}))
            setEditing((prev) => false)
            console.log("updated and set editing => false")
          }
          setTitle("")
    }

    useEffect(() => {
      if (editing)
        setTitle(eTitle)
    }, [eTitle]);

  return (
    <form onSubmit={submitHandler}>
        <input type="text" className='inp' value={title} onChange={(e) => setTitle(e.target.value)} />
        <button className='createbtn'>{ editing ? "save" : "create "}</button>
    </form>
  )
}

export default Todoform