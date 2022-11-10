import React from "react"
import Question from "./quiz-components/Question"
import Answer from "./quiz-components/Answer"

export default function Quiz (props) {



  return(
    <div className="quiz">
      <Question />
      <h1>{props.quiz}</h1>
      <Answer />
      <hr></hr>
    </div>
  )
}