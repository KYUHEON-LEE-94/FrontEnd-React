import React from 'react'

export default function EvenOdd({count}) {
  return (
    <div>
      {count%2 === 0? "짝수":"홀수"}
    </div>
  )
}
