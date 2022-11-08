import React, { useReducer } from 'react'
import { sheetReducer } from "./sheetReducer.js";

export default function App() {
  const [sheet, dispatch] = useReducer(sheetReducer, init)

  const handleUpdate = () => {
    const prev = prompt("변경할 Code? ")
    const code = prompt("새로 입력할 Code? ")
    const role = prompt("새로 입력할 role? ")

    dispatch({ type: "update", prev, code, role })
  }
  const handleAdd = () => {
    const code = prompt("새로 입력할 Code? ")
    const role = prompt("새로 입력할 role? ")

    dispatch({ type: "add", code, role })
  }
  const handleDelete = () => {
    const code = prompt("삭제할 코드는? ")

    dispatch({ type: "delete", code })
  }

  return (
    <div>
      <h1>{sheet.language}</h1>
      <b style={{ fontSize: "12px" }}>{sheet.title}</b>
      <p>{sheet.language}의 명령어는</p>
      <ul>
        {sheet.commands.map((word, idx) => {
          <li key={idx}>
            {word.code}{word.role}
          </li>
        })}
      </ul>
      <button onClick={handleUpdate}>Code 변경</button>
      <button onClick={handleAdd}>Code 추가</button>
      <button onClick={handleDelete}>Code 삭제</button>
    </div>
  )
}

const init = {
  language: 'React',
  title: '사용자 UI 컴포넌트',
  commands: [
    {
      code: 'state',
      role: '내부 상태를 변경'
    },
    {
      code: 'Props',
      role: '외부로 부터 전달받은 상태'
    }
  ]
}
