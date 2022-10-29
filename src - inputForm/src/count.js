
import React,{useState} from 'react';
import Container from './Container';
import EvenOdd from './EvenOdd';


export default function Count({init}) {
    const [count, setcount] = useState(init);

    function add(){
        setcount((prev => prev+1))
        setcount((prevNum => prevNum+1))
        setcount((prevNum => prevNum+1))
        setcount((prevNum => prevNum+1))
    }

    function minus(){
        setcount(count-1)
    }

  return (
    <Container>
      <h2>{count}</h2>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
      <EvenOdd count={count}/>
    </Container>
  )
}
