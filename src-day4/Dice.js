import React from 'react'
//외부 이미지를 객체처리해서 불러옴
import diceBlue01 from './assets/dice-blue-1.svg';
import diceBlue02 from './assets/dice-blue-2.svg';
import diceBlue03 from './assets/dice-blue-3.svg';
import diceBlue04 from './assets/dice-blue-4.svg';
import diceBlue05 from './assets/dice-blue-5.svg';
import diceBlue06 from './assets/dice-blue-6.svg';
import diceRed01 from './assets/dice-red-1.svg';
import diceRed02 from './assets/dice-red-2.svg';
import diceRed03 from './assets/dice-red-3.svg';
import diceRed04 from './assets/dice-red-4.svg';
import diceRed05 from './assets/dice-red-5.svg';
import diceRed06 from './assets/dice-red-6.svg';

//props.~~ 하는 게 귀찮으니까, props라는 객체 자체를 매개 인수로 받고{} 그 안에 있는 속성을 바로 사용할 수 있게 함

export default function Dice({ color, num }) {
    //    const diceImg = (props.color === 'blue' ? diceBlue01 : diceRed01);

    const dice_Imgs = {
        blue: [diceBlue01, diceBlue02, diceBlue03, diceBlue04, diceBlue05, diceBlue06],
        red: [diceRed01, diceRed02, diceRed03, diceRed04, diceRed05, diceRed06]
    }
    //객체['객체의 속성명'][인덱스값] 문법을 사용
    const src = dice_Imgs[color][num - 1];
    const alt = `${color}${num}`

    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}
