import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Application from "./components/application/application"
import Skills from "./components/skills/skills"
import Counter from "./components/counter/counter"

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Application /> */}
      {/* <Skills skills={["Javascript", "ReactJS"]} /> */}
    </div>
  )
}

export default App
