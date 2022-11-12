import React from 'react'
import ReviewItem from './ReviewItem'

export default function ReviewList({ reviewList, onRemove, onEdit }) {
    return (
        <div className='ReviewList'>
            <h2>리뷰 리스트</h2>
            <p>{reviewList.length}개의 리뷰가 있습니다.</p>
            <div>
                {reviewList.map((list) =>
                    <ReviewItem key={list.id} {...list} onRemove={onRemove} onEdit={onEdit} />
                    //배열은 고유의 키값이 있어야 효율 좋게 관리가 가능하다.
                    //list(객체)를 그대로 ReviewItem으로 넘겨주기 위해서 ...list를 사용
                )}
            </div>
        </div>
    )
}
