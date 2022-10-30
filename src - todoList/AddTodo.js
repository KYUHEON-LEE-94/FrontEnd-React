// npmjs 검색해서 npm install uuid로 npm 설치
// reacti-icons 설치 npm install react-icons --save

import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd}) {
    const [text, settext] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault()
        //입력된 값이 없을때()
        if(text.trim().length === 0){
            return
        }
        onAdd({id:uuidv4(),text,status:'active'})
        settext('')
    };
    const handleChange = (e) =>{settext(e.target.value)};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='할일 추가'
        value={text}
        onChange={handleChange}
        />
    <button>추가</button>
      </form>
    </div>
  )
}
