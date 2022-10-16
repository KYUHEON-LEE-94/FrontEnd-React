import Dice from './Dice';



function Board({ name, color, gameHistory }) {
    const num = gameHistory[gameHistory.length - 1] || 1;
    //null값이 아니면 앞의 값, null값이면 뒤값
    const sum = gameHistory.reduce((total, value) => total + value, 0)


    return (
        <div className='Board App-Board'>
            <h2 className='Board-heading'>{name}</h2>
            <Dice color={color} num={num} />
            <h2 className='Board-heading'>총점</h2>
            <p>{sum}</p>
            <h2 className='Board-heading'>기록</h2>
            {gameHistory.join(',')}
        </div>

    );
}

export default Board;
