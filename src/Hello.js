import { Component } from 'react'

export default function Hello (props) {
  return (
    <h2>Hello to {props.person}</h2>
  )
}

// export default class Hello extends Component {
//   constructor () {
//     super()
//   }

//   render () {
//     return (
//       <h2>Hello???</h2>
//     )
//   }
// }