export default function HighCount (props) {
  if (props.count <= 3) {
    return <></>
  }
  return (
    <h3>The count is too high!</h3>
  )
}