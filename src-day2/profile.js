import React from 'react'

export default function Profile(props) {
  return (
    <div>
      <h2>{props.name}<b className='role'>{props.role}</b></h2>
      <p>{props.team}</p>
    </div>
  )
}
