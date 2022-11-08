import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import Todoitem from './Todoitem';
import styles from './TodoList.module.css';



//LocalStorage에 저장한 정보를 불러오기 위한 function
const getLocalStorageTodos = () => {
  const todos = localStorage.getItem('todos')
  return todos ? JSON.parse(todos) : []
}

export default function TodoList({ filter }) {
  const [todos, settodos] = useState(() => getLocalStorageTodos());

  const handleAdd = (todo) => {
    settodos([...todos, todo]);

  }

  const handleUpdate = (update) => {
    settodos(todos.map(u => (u.id === update.id ? update : u)))
  }

  const handleDelete = (id) => {
    settodos(todos.filter(todo => todo.id !== id))
  }

  const filtered = getFilterItem(todos, filter)

  //LocalStorage를 로딩시에 한번 불러오기 위한 useEffect
  // -> todos가 바뀔때마다!
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {
            filtered.map(item => ( //()는 return해줌
              <Todoitem
                key={item.id}
                todo={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))
          }
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  )
}

const getFilterItem = (todos, filter) => {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter)
}

