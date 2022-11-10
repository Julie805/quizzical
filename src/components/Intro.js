import React from "react"
import Quiz from "./Quiz"


export default function Intro () {

  /* 2 states: start(to start quiz), quizData (to set up Question objects)  */
  const [start, setStart] = React.useState(false)

  const [quizData, setQuizData] = React.useState([])

/* Gets the API data upon opening app and pushes it to quizData state  */
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then(res =>res.json())
    .then(data => setQuizData(data.results))
  }, [])

 
  function startQuiz() {
    setStart(true)
  }


 /* Starts the quiz. Button makes start state true. If start=true, the Quiz component is activated. */
  return (
    <div>
      { start ? <Quiz quiz={quizData} /> : 
        <div className="intro">
          <h1>Art Quizzical</h1>
          <p>Test your knowlege of the creative world</p>
          <button className="start-button" onClick={startQuiz}>Start quiz</button>
        </div>
      }
    </div>
  )}