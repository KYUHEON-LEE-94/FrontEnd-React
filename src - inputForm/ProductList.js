import React, { useEffect, useState } from 'react'

export default function ProductList() {
   const [product, setproduct] = useState([]);
   const [check, setcheck] = useState(false);
useEffect(() => {
  // check? 에따라서 불러오는 json종류를 바꾸겠다.
  fetch(`data/${check?`sale_product`:`product`}.json`)
  .then((text) =>  text.json())
  .then((data) => {
    console.log(data);
    setproduct(data);
  })
  //기준은 check값이 바뀔때마다
}, [check]);

//이전의 check값을 !check값으로 만들어주겠다 -> 이 함수가 실행될때마다!
const handleChange = () => setcheck(prev => !prev)

  return (
    <div>
      <input type='checkbox' id='checkbox' onChange={handleChange}/>
      {/* for는 제어문으로 사용되고 있기때문에 JSX에서는 htmlfor로 사용해서 input과 연결 */}
      <label htmlFor="checkbox">세일 상품보기</label>
      <ul>
      {product.map((product,i) => {
        return(
        <li key={i}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </li>
        )
      })}
      </ul>
    </div>
  )
}
