import React, { useState } from 'react';
import './App.css';

function AppCopy() {
  const [cheatSheet, setcheatSheet] = useState({
    language: 'React',
    title:'사용자 UI 컴포넌트',
    commands: [
      {
        code: 'state',
        role: '내부 상태를 변경'
      },
      {
        code: 'props',
        role: '외부로부터 전달받은 '
      }
    ]
      
  });
const handleUpdate = () =>{
  //cheatSheet.commands.code를 바꿔야 하기때문에 변경 원하는 변수명은 일치 시킬것
  const code = prompt("변경할 Code? ")  
                                                        //...cheatSheet.commands값들을 그대로 받고, 변경되는 code값을 추가로 넣어서 -> 주소값이 변경되었다는 걸 알려줌
  setcheatSheet((cheatSheet) => ({...cheatSheet,commands:{...cheatSheet.commands,code}}))
}

const handleRole = () =>{
  const role = prompt("변경할 Role? ")
  setcheatSheet((cheatSheet) => ({...cheatSheet,commands:{...cheatSheet.commands,role}}))
}

  return (
    <div className='App'>
      <h1>{cheatSheet.language}는 <b style={{fontSize:"12px"}}>{cheatSheet.title}</b>이다</h1>
      <p>{cheatSheet.language}</p>
      <ul>
        {cheatSheet.commands.map((list)=>(
        <li>
          {list.code} 명령은 ({list.role})역할을 한다.
          
        </li>))}

      </ul>
      <button onClick={handleUpdate}>Code 변경</button>
      <button onClick={handleRole}>role 변경</button>
    </div>
  );
}


export default AppCopy;
