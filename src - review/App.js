import { useEffect, useRef, useState } from 'react';
import './App.css';
import ReviewEditior from './components/ReviewEditior';
import ReviewList from './components/ReviewList';




function App() {

  const [data, setdata] = useState([]);
  const idref = useRef(1);

  const getData = async () => {
    //await은 프로미스가 실행될때까지 '기다려!'라는 뜻
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json()) //정보를 받는 다는것을 확인함

    //slice로 20개만 가져오기
    const initData = res.slice(0, 20).map((list) => {
      return {
        title: list.email,
        content: list.body,
        grade: Math.floor((Math.random() * 5)) + 1,
        create_date: new Date().getTime(),
        id: idref.current++
      }
    })

    setdata(initData)

  }

  //처음 렌더링될때 한번만!
  useEffect(() => {
    getData()
  }, [])


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

  //분석하는 함수
  const getReviewAnalysis = () => {
    if (data.length === 0) {
      //없을 경우의 초기값
      return { goodCount: 0, badCount: 0, goodRatio: 0 }
    }
    const goodCount = data.filter((list) => list.grade >= 3).length
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100
    return { goodCount, badCount, goodRatio } //객체! 객체!
  }

  //구조분해 할당
  const { goodCount, badCount, goodRatio } = getReviewAnalysis();

  return (
    <div className='App'>
      <ReviewEditior onCreate={handleCreate} />
      <div>전체 리뷰수: {data.length}개 </div>
      <div>GOOD 평가: {goodCount}개 </div>
      <div>BAD 평가: {badCount}개 </div>
      <div>GOOD 평가비율: {goodRatio}% </div>
      <ReviewList onRemove={handleRemove} reviewList={data}
        onEdit={handleEdit} />
    </div>
  );
}

export default App;
