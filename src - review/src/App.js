import './App.css';
import React,{useState} from 'react';
import Count from './count';


function App() {
   const [mode, setmode] = useState("NIGHT");
   
   const changeMode =()=>{
     setmode(mode == "NIGHT"? "LIGHT":"NIGHT");
   
   }

  let countProps ={
    a:1,
    b:2,
    c:3,
    d:4,
    init:100
  }

  return (
    <div>
      <h1>STATE</h1>
      <button onClick={changeMode}>{mode}</button>
      <Count {...countProps}/>
    </div>
  );
}


export default App;
