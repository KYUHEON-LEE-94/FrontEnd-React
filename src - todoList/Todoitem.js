import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

export default function Todoitem({todo, onUpdate, onDelete}) {
    const {text, status} = todo
    const handleChecked = (e)=>{
        const status = e.target.checked? 'complate':'active'
        onUpdate({...todo,status})

    }
  return (
    <div>
        <li>
            <input type="checkbox" id="check" checked={status =='complate'} onChange={handleChecked}/>
            <label htmlFor="check" >{todo.text}</label>
            <button onClick={() =>onDelete(todo.id)}><FaRegTrashAlt/></button>
        </li>
    </div>
  )
}
