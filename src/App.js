import React from "react"
import Intro from "./Intro"
import  Quiz from "./Quiz"
import './style.css'

function App() {

    /* 2 states: start(to start quiz), quizData (to set up Question objects)  */
    const [start, setStart] = React.useState(false)

    function startQuiz() {
      setStart(true)
    }

    function playAgain() {
      setStart(false)
    }
  
  
  return (
    <main>
      { start ? <Quiz playAgain={playAgain} /> : <Intro start={startQuiz} /> }
    </main>
  )
}

export default App;
