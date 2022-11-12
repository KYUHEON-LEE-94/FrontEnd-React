import React, { useRef, useState } from 'react'
//구조 분해 할당으로 하나씩 다 받자
export default function ReviewItem({ id, title, content, grade, create_date, onRemove, onEdit }) {

    //수정 할거야 안할거야? 를 확인하기 위한 check useState
    const [isEdit, setisEdit] = useState(false);
    const [localContent, setlocalContent] = useState(content)
    const localContentIdREf = useRef();

    //onremove 함수 실행여부를 한번 확인하기 위한 함수
    const handleRemove = () => {
        if (window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)) {
            onRemove(id)

        }
    }

    //수정 함수
    const toggleIsEdit = () => {
        setisEdit(!isEdit)

    }

    //수정 취소 버튼을 누르면 원래의 값대로 돌아가게 하는 함수
    const handleQuitEdit = () => {
        setisEdit(false)
        setlocalContent(content)

    }

    const handleEdit = () => {
        //수정확정을 위해서는 유효성 검사 한번 똑같이 해주고
        if (localContent.length < 5) {
            alert('내용은 5글자 이상 입력하세요')
            localContentIdREf.current.focus();
            return
        }
        //App.js의 handleEdit을 실행해서 정보값을 수정해줘야함
        onEdit(id, localContent)
        //isEdit을 취소값으로 돌려줘야지 다시1
        setisEdit(!isEdit)
    }
    return (
        <div className='ReviewItem'>
            <p className='info'>영화제목: {title} | 평점:{grade}</p>
            <p className='date'>{new Date(create_date).toLocaleDateString()}</p>
            {/* 날짜를 이쁘게 나오기 위한 포매팅 */}

            {/* isEdit이 true면  textarea를 보여주고, false면 content내용을 있는 그대로 보여줘*/}
            <p className='content'>{isEdit ? <textarea value={localContent} onChange={e => setlocalContent(e.target.value)} ref={localContentIdREf} /> : content}
            </p>
            {
                isEdit ? <>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleEdit}>수정 완료</button>
                </>
                    : <>

                        <button onClick={handleRemove}>삭제</button>
                        <button onClick={toggleIsEdit}>수정</button>
                    </>
            }
        </div >
    )
}
