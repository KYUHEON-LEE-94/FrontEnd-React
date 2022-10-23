import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setcount] = useState(0);
  const [text, settext] = useState("");
  const [show, setshow] = useState(false);

  useEffect(() => {
    console.log("계속 업데이트!!");
  });
  useEffect(() => {
    console.log("처음한번 읽어옴");
  }, []);

  //count가 바뀔때만 log발동
  useEffect(() => {
    console.log("Count가 변경됨");
  }, [count]);

   //text가 바뀔때만 log발동
  useEffect(() => {
    console.log("text가 변경됨");
  }, [text]);


  const toggle = () =>{
    setshow(!show)
  };

  //함수는 무조건 대문자로 시작!
  function ShowHide() {
    useEffect(() => {
      console.log('나타남');
      return ()=>{
        //사라지는걸 체크할떄 여기서 구현해라!
        console.log('사라짐');
      };

    }, []);
    return <div>Life Cycle</div>
  }

  return (
    <div className="App">
      <>
        {count}
        <button onClick={() => setcount(count + 1)}>+</button>
        <div>
          <input value={text} onChange={(e) => settext(e.target.value)}></input>
        </div>
        <button onClick={toggle}>ON/OFF</button>
        {/* show가 false일떄만 ShowHide()가 실행 */}
        {show &&<ShowHide/>}
      </>
    </div>
  );
}

//localStorage에 저장 - 새로고침으로 지워지지 않는 값
// localStorage.setItem('name','미미')
// undefined
// localStorage.setItem('age',30);
// undefined
// localStorage.getItem(name)
// null
// localStorage.getItem('name')
// '미미'
// localStorage.getItem('age')
// '30' ->문자값으로 반환됨

// data = {key:1, arr:[1,2,,4]}
// {key: 1, arr: Array(4)}
// localStorage.setItem("test",data)
//이렇게 넣게되면 ->
//test	[object Object] Application화면에서 이렇게 표기됨

//이걸 방지하기 위해서 JSON 방식으로 저장함
//jsontext = JSON.stringify(data)
// localStorage.setItem('account', jsontext )
// -> 결과 account	{"key":1,"arr":[1,2,null,4]} -> 전부 문자열로 등록됨
// json = JSON.parse(jsonData ); -> 파싱해주면 제대로된 객체로 나옴


export default App;
