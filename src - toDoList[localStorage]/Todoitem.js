import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import styles from './Todoitem.module.css';

export default function Todoitem({ todo, onUpdate, onDelete }) {
  const { text, status } = todo
  const handleChecked = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({ ...todo, status })

  }
  return (
    <>
      <li className={styles.todo}>
        <input className={styles.checkbox}
          type="checkbox"
          id={todo.id}
          checked={status === 'completed'}
          onChange={handleChecked} />

        <label className={styles.text} htmlFor={todo.id} >{text}</label>

        {/* onClick={onDelete(todo.id)}는 미리 이 함수를 실행해버림 */}
        <span className={styles.icon}>
          <button className={styles.button}
            onClick={() => onDelete(todo.id)}>
            <FaRegTrashAlt />
          </button>
        </span>

      </li>
    </>
  )
}
