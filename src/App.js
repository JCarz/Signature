import React, { useState } from "react"
import "./App.css"

function App() {
  const [showForm, setShowForm] = useState(false)
  const showForm1 = () => {
    setShowForm(!showForm)
  }
  return (
    <div className="wrapper">
      <h1>Form Submit</h1>

      <button className="signHere" onClick={showForm1}>
        Sign Here
      </button>

      {showForm && (
        <form>
          <div className="signaturePic"></div>
          <fieldset>
            <label>
              <p>Complete Full Name</p>
              <input name="name" placeholder="Type Here" />
              <p>Title</p>
              <input title="tile" placeholder="Type Here" />
              <p>Company (optional)</p>
              <input company="company" placeholder="Type Here" />
            </label>
            <hr></hr>

            <p>
              {" "}
              <img
                name="timer"
                src="https://img.icons8.com/fluency-systems-regular/48/000000/timer.png"
              />
              Waiting for <strong>Persons</strong> signature
            </p>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  )
}
export default App

// class buttonToggle extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isToggleOn: true }

//     //This binding is necessary to make 'this' work in the call back
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }))
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     )
//   }
// }
// export default buttonToggle
