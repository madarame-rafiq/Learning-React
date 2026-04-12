import React, { useState } from 'react'
import Todoform from './components/Todoform'
import Todos from './components/Todos'

function App() {

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState(null);

  return (
    <div className='container'>
      <h1 className='heading'>To-Do using redux</h1>

      {/* Form comes here */}
      <Todoform editing={isEditing} setEditing={setIsEditing} eid={editId} setEid={setEditId} eTitle={editTitle} seteTitle={setEditTitle} />

      {/* Todos comes here */}
      <Todos editing={isEditing} setEditing={setIsEditing} eid={editId} setEid={setEditId} eTitle={editTitle} seteTitle={setEditTitle} />

    </div>
  )
}

export default App