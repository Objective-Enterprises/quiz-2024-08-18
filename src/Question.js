import { useRef } from "react"

export default function Question (props) {
  const answerRef = useRef()
  function handleChange (event) {
    // setAnswer(event.target.value)
    answerRef.current = event.target.value
  }
  function handleSubmit (event) {
    event.preventDefault()
    console.log('answerRef.current', answerRef.current)
    const total = first + second
    console.log('total', total)
    const answerNumber = Number(answerRef.current)
    console.log('answerNumber:', answerNumber)
    const correct = answerNumber === total
    console.log('correct', correct)
    const result = {
      first,
      second,
      answer: answerNumber
    }
    props.addResult(result)
  }
  const first = Math.ceil(Math.random() * 10)
  const second = Math.ceil(Math.random() * 10)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {first} + {second} = 
      </div>
      <input onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}