import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>{count}</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
    </>
  )
}
