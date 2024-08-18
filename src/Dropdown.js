import { useState } from 'react'

export default function Dropdown () {
  const [list, setList] = useState(new Set())
  const [selectedName, setSelectedName] = useState('')
  const names = ['Amy', 'Mary', 'Janet']
  const options = names.map((name, index) => {
    return (
      <option key={index} value={name}>{name}</option>
    )
  })
  function handleChange (event) {
    setSelectedName(event.target.value)
  }
  function handleSubmit (event) {
    event.preventDefault()
    console.log('selectedName', selectedName)
    console.log('list', list)
    const newList = new Set(list)
    newList.add(selectedName)
    setList(newList)
  }
  const array = [...list]
  const items = array.map((name, index) => {
    return (
      <li key={index}>{name}</li>
    )
  })
  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedName}
        onChange={handleChange}
      >
        {options}
      </select>
      <button>Submit</button>
      <ol>
        {items}
      </ol>
    </form>
  )
}