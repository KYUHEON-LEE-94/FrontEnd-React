import './App.css';
import Board from './Board';
import React, { useState } from 'react';
import Button from './Button';

function App() {

  const [gameHistory, setgameHistory] = useState([])

  //---------------------------------------------------------
  const [yourgameHistory, setyourgameHistory] = useState([])


  const random = () => {
    return Math.ceil(Math.random() * 6);
  }

  const handleClick = () => {
    //값을 변경할 때는 setNum을 사용해야함
    const nextNum = random();
    //현재 gameHistory의 배열들(...args)과 지금 입력되는 값을 setgameHistory에 저장
    setgameHistory([...gameHistory, nextNum]);

    //-------------------------------------------------
    const nextyourNum = random();
    setyourgameHistory([...yourgameHistory, nextyourNum]);
  }

  const handleClear = () => {
    setgameHistory([])

    //-------------------------------------------------
    setyourgameHistory([])
  }

  return (
    <div className='App'>
      <div>
        {/* Children방식으로 받기 */}
        <Button className='App-Button' color='red' onClick={handleClick}>던지기</Button>
        <Button className='App-Button' color='blue' onClick={handleClear}>다시하기</Button>
      </div>
      <div className='App-Boards'>
        <Board name="MY" color="red" gameHistory={gameHistory} />
        <Board name="YOUR" color="blue" gameHistory={yourgameHistory} />
      </div>
    </div>
  );
}

export default App;
