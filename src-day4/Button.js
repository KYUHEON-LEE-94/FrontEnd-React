import React from 'react'
import './Button.css';

// const baseButtonStyle = {
//     padding: "14px 27px",
//     borderRadius: "30px",
//     outline: "none",
//     cursor: "pointer",
//     fontSize: "17px"
// }

// const redButtonStyle = {
//     ...baseButtonStyle,
//     backgroundColor: 'rgba(0,89,255,.2)',
//     border: 'solid 1px #7090ff',
//     color: '#7090ff'
// }

// const blueButtonStyle = {
//     ...baseButtonStyle,
//     backgroundColor: 'rgba(255,78,78,.2)',
//     border: 'solid 1px #ff4664',
//     color: '#ff4664'
// }

export default function Button({ children, onClick, color }) {
    //    const style = color === 'red' ? redButtonStyle : blueButtonStyle
    const className = `Button ${color}`;
    return (
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    )
}
