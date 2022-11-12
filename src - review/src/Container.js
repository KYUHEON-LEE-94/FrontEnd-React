import React from 'react'

//Container를 하나의 Tag처럼 싸아서 사용하는 예시 {children}를 인자로 받아서 사용한다.
export default function Container({children}) {
  return (
    <div style={{margin:100, padding:20, border:'1px solid blue'}}>
      {children}
    </div>
  )
}
