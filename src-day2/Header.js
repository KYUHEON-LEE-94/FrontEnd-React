import React from 'react'

export default function Header(props) {
  const clickHandler = (e) =>{
    e.preventDefault();
    props.changeModule(Number(e.target.id));
    
  }

    return(
      <header>
      <h1>WEB</h1>
    </header>
    )
  }

