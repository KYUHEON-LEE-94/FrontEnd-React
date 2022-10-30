import React, {useState } from 'react';
import AddTodo from './AddTodo';
import Todoitem from './Todoitem';

export default function TodoList() {
    const [todos, settodos] = useState([
        {id:'1',text:'강아지 산책', status:'active'},
        {id:'2',text:'js 공부',status:'active'}
    ]);
    const handleAdd = (todo)=>{
        settodos([...todos, todo]);

    }

    const handleUpdate = (update) =>{
        settodos(todos.map(u=> (u.id === update.id? update:u)))
    }

    const handleDelete = (id) =>{
        settodos(todos.filter(todo => todo.id !== id))
    }
  return (
    <div>
      <section>
        <ul>
            {   
                todos.map(item =>( //()는 return해줌
                    <Todoitem
                    key={item.id}
                     todo={item}
                     onUpdate = {handleUpdate}
                     onDelete = {handleDelete}
                     />
                ))
            }
        </ul>
        <AddTodo onAdd={handleAdd}/>
      </section>
    </div>
  )
}
