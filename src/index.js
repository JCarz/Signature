import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import listItems from "./NumberedList"
import reportWebVitals from "./reportWebVitals"
const numbers = [1, 2, 3, 4, 5]
ReactDOM.render(<App />, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
