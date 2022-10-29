import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setinputs] = useState({
        name: '',
        nickname: ''
    })

    const { name, nickname } = inputs // 비구조화 할당을 통해 값을 할당

    //input값 표시
    const handleChange = (e) => {
        const { value, name } = e.target //e,targt에서 name과 value를 가져온다.
        setinputs({
            ...inputs, //기존의 inputs 넣고
            [name]: value //[ [name] => name이라고 하는 위의 변수:value값으로 설정해줘.
            //name: value로 하면 name이라고 하는 'key':value로 됨
        })
    }

    //useref사용
    const nameInput = useRef();
    console.log(nameInput); // {current: undefined}값이 들어갔음.

    //input값을 초기화
    const handleReset = () => {
        setinputs({
            name: '',
            nickname: ''
        })
        //이 함수가 실행되는 버튼을 눌렀을때 마우스 커서 포커스를 바꾸겠다.
        nameInput.current.focus();
    }
    return (
        <div>
            <input name='name' placeholder='이름' onChange={handleChange} value={name} ref={nameInput} />
            {/* ref={nameInput}요기로 포커스를 하겠다!*/}
            <input name='nickname' placeholder='닉네임' value={nickname} />
            <button onClick={handleReset}>초기화</button>
            <div>
                <b>값: </b>
            </div>
        </div>
    );
}

export default InputSample;