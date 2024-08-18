import { useState } from "react"
import Question from "./Question"

export default function Quiz (props) {
  const [ready, setReady] = useState(false)
  if (ready) {
    return (
      <Question addResult={props.addResult} />
    )
  }
  function handleClick () {
    setReady(true)
  }
  return (
    <button onClick={handleClick}>Ready?</button>
  )
}