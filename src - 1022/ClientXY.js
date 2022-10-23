import './App.css'
import React, { useState } from 'react';
function ClientXY() {
    //데이터 state: 내부 상태
    // Props: 외부로부터 전달받은 상태
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    const [position, setPosition] = useState({
        x:0,
        y:0
    });

    const handleX = (e) =>{
        console.log(e.clientX, e.clientY)
    // setX(e.clientX)
     // setY(e.clientY) ->
     //setPosition({x:e.clientX, y:e.clientY})
     // ->   position(스테이트)를 그대로 받아서 전달하고, 변경된 x값과 y값을 전달해서 새로운 변수 창조(주소값이 바뀜) -> 컴퓨터가 해당 값이 바뀌었다는걸 인식할수 잇음
     //useState가 객체니까 { }로 받아야지.
     setPosition(position => ({...position, x:e.clientX, y:e.clientY}))
    }
  return (
    <div className='container' onPointerMove={handleX}>
      <div className='pointer' 
      style= {{transform:`translate(${position.x}px, ${position.y}px)`}}>

      </div>
    </div>
  );
}
export default ClientXY;


//useState의 개념은
//변수의 주소값을 바꿔주는 개념이다 -> 새로운 변수를 만들어서 기존의 변수를 새롭게 만들어진 변수에 넣어주는 느낌
//hap = 0
// hap += 5
// obj1 = {esdf:fse}
//obj2 ={...obj1, fsef:fse}