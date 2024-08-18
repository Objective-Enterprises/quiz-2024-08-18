import Quiz from "./Quiz"
import Dropdown from "./Dropdown"
import Answers from "./Answers"
import { useState } from "react"
import './style.css'

export default function App () {
  const [results, setResults] = useState([])
  console.log('results:', results)
  function addResult (result) {
    const newResults = [...results, result]
    setResults(newResults)
  }
  return (
    <>
      <Dropdown />
      <h1 className='highlight'>Quiz App</h1>
      <Quiz addResult={addResult} />
      <Answers results={results} />
    </>
  )
}