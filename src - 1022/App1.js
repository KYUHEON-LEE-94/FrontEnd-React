import React, { useState } from 'react';
import './App.css';

function App() {
  const init = {
    language: 'React',
    title:'사용자 UI 컴포넌트',
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
  const [cheatSheet, setcheatSheet] = useState(init);


const handleUpdate = () =>{

  const prev = prompt("변경할 Code? ")  
  const code = prompt("새로 입력할 Code? ")  
  const role = prompt("새로 입력할 role? ")  

  setcheatSheet((sheet) => ({
    ...sheet,
    commands: sheet.commands.map((word)=>{
      if(word.code === prev){
        return{...word,code,role}
      }
      return word
    })
  }));
};

const handleAdd = () =>{
  const code = prompt("새로 입력할 Code? ")  
  const role = prompt("새로 입력할 role? ")  
  
  setcheatSheet((sheet)=>({
    ...sheet,
    commands: [...sheet.commands,{code,role}]
  }))
}
const handleDelete = () =>{
  const code = prompt("삭제할 코드는? ")

  setcheatSheet((sheet)=>({
    ...sheet,
    commands: sheet.commands.filter(sw => sw.code !== code)
  }))
}

  return (
    <div className='App'>
      <h1>{cheatSheet.language}는 
      <b style={{fontSize:"12px"}}>{cheatSheet.title}</b>이다
      </h1>
      <p>{cheatSheet.language}</p>
      <ul>
        {/*cheatSheet.commands만큼 반복하는 중..  */}
      {cheatSheet.commands.map((list) => (
        <li>
          {list.code}명령은({list.role}) 역할을한다.
        </li>
      ))}

      </ul>
      <button onClick={handleUpdate}>Code 변경</button>
      <button onClick={handleAdd}>Code 추가</button>
      <button onClick={handleDelete}>Code 삭제</button>
    </div>
  );
}


export default App;
