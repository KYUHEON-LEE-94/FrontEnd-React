import React from 'react'

export default function article(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  )
}
