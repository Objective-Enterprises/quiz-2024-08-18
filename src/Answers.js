export default function Answers (props) {
  const rows = props.results.map((result, index) => {
    const correct = result.first + result.second === result.answer
    return (
      <tr key={index}>
        <td>{result.first}</td>
        <td>{result.second}</td>
        <td>{result.answer}</td>
        <td>{correct ? 'Yes' : 'No'}</td>
      </tr>
    )
  })
  return (
    <>
      <h2>Answers</h2>
      <table>
        <thead>
          <tr>
            <th>First</th>
            <th>Second</th>
            <th>Answer</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </>
  )
}