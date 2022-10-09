import React from 'react'

export default  function Nav(props) {
    let datas = props.datas;
//    let lists = []
// for (let i =0; i<datas.length; i++) {
//     let li = datas[i];
//     lists.push(<li key={li.id} ><a href={'./'+li.id+'.html'}>{li.title}</a></li>);   
// }

    return(
      <nav>
      <ul>
      {datas.map((list)=>{
        return(
            <li key={list.id} ><a href={'./'+list.id+'.html'}>{list.title}</a></li>
        )
      })}
      </ul>
    </nav>
    )
  }
