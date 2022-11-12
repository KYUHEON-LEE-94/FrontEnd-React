import { useRef, useState } from 'react';
import './App.css';
import ReviewEditior from './components/ReviewEditior';
import ReviewList from './components/ReviewList';




function AppV1() {
  const [data, setdata] = useState([]);

  //새로운 id값도 추가해줘야 한다 -> 기준이 되는 값을 설정해줄때 사용하기 위해 생성
  const idref = useRef(1);

  //리스트 추가
  const handleCreate = (title, content, grade) => {
    const create_date = new Date().getTime();
    const newitem = {
      title,
      content,
      grade,
      create_date,
      id: idref.current
    }
    idref.current += 1;

    setdata([newitem, ...data])
  }

  //리스트 삭제
  const handleRemove = (targetid) => {
    //입력된 id와 다른 것만 반환해라 == 입력되는 id는 지워라
    const newReviewData = data.filter(list => list.id !== targetid)
    //[]로 반환됨
    setdata(newReviewData)
  }

  //리스트의 코멘트 수정
  const handleEdit = (targetid, newContent) => {
    setdata(
      data.map(list => list.id === targetid ? { ...list, content: newContent } : list)
    )
  }

  return (
    <div className='AppV1'>
      <ReviewEditior onCreate={handleCreate} />

      <ReviewList onRemove={handleRemove} reviewList={data}
        onEdit={handleEdit} />
    </div>
  );
}

export default AppV1;
