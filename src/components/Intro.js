import React from "react"
import Quiz from "./Quiz"


export default function Intro () {

  const [start, setStart] = React.useState(false)

  function startQuiz() {
    setStart(true)
  }

  
  return (
    <div>
      {start ? <Quiz /> :  
        <div className="intro">
          <h1>Art Quizzical</h1>
          <p>Test your knowlege of the creative world</p>
          <button className="start-button" onClick={startQuiz}>Start quiz</button>
        </div>
      }
    </div>
  )
}