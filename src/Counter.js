import { useState } from 'react'
import HighCount from './HighCount'

// let count = 0
export default function Counter () {
  const [count, setCount] = useState(0)
  function handleClick () {
    console.log('click')
    // count += 1
    const newCount = count + 1
    setCount(newCount)
    console.log('count', count)
  }
  return (
    <>
      <button onClick={handleClick}>Count {count}</button>
      {count > 3 && <HighCount />}
    </>
  )
}