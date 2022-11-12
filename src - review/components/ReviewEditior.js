import React, { useRef, useState } from 'react'

export default function ReviewEditior({ onCreate }) {
    const [state, setstate] = useState({
        title: '',
        content: '',
        grade: '1'
    })

    const titleRef = useRef()
    const contentRef = useRef()

    //입력된 값들을 넣어주는 메서드
    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    //유효성 검사 메서드, 입력받는 데이터 값을 제한해준다고 생각하면 됨
    const handleSubmit = () => {
        if (state.title.length < 1) {
            alert('제목은 1글자 이상 입력해주세요')
            //이렇게 화면을 띄워준 후에, 다시 입력할 숫 있게 커서를 옮겨주면 UI적으로 편하겠지?
            //-> 그럴때 사용하는게 useRef다
            titleRef.current.focus()
            return
        }
        if (state.content.length < 5) {
            alert('내용은 5글자 이상 입력하세요')
            contentRef.current.focus();
            return
        }
        onCreate(state.title, state.content, state.grade)
        setstate({
            title: '',
            content: '',
            grade: '1'
        })
        alert('저장 성공')
    }

    return (
        <div className='ReviewEditor'>
            <h2>Review 작성</h2>
            <div>
                <input name="title" value={state.title} onChange={handleChange}
                    ref={titleRef} />
            </div>
            <div>
                <textarea name="content" value={state.content} onChange={handleChange}
                    ref={contentRef}
                    placeholder='감상평' />
            </div>
            <div>
                <span>리뷰점수: </span>
                <select name='grade' value={state.grade}
                    onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button onClick={handleSubmit}>리뷰 등록</button>
        </div>
    )
}
