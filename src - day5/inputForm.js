import React, { useState } from 'react'

export default function inputForm() {
    const [inputs, setinputs] = useState({
        name: '',
        nickName: ''
    });

    const handleChange = (e) => {
        //        setext(e.target.value)
    }
    const handleReset = () => {
        //        setext('')
    }

    return (
        <div>
            <input name='name' onChange={handleChange} value={name} />
            <input name='nickName' onChange={handleChange} value={nickName} />
            <button onClick={handleReset}>초기화</button>
            <div>
                <b>값:{text}</b>
            </div>
        </div>
    )
}
