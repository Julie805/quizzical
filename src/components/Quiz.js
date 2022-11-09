import React from "react"
import Question from "./quiz-components/Question"
import Answer from "./quiz-components/Answer"

export default function Quiz () {
  const [fullQuestion, setFullQuestion] = React.useState({
      question:[],
      correctAnswer: "",
      wrongAnswers: []
  })

  const [quizData, setQuizData] = React.useState([])
  
  /* Gets the API data  */
  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
    .then(res =>res.json())
    .then(data => setQuizData(data.results))
  }, [])

 function getQuestion() {
    const randomQuestion = Math.floor(Math.random()*quizData.length)
    const question = quizData[randomQuestion].question
    return question
 }

 console.log(getQuestion)

  

  return(
    <div className="quiz">
      <Question />
      <Answer />
      <hr></hr>
    </div>
  )
}