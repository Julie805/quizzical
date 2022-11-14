import React from 'react'

export default function Card (props) {


 function renderAnswers() {
  const randomNumber = Math.floor(Math.random() * 3)
  const allAnswersArray = props.incorrectAnswers.splice(randomNumber, 0, props.correctAnswer)

  allAnswersArray.map((answer) => {
  return  <button className="answer-button">{answer}</button>
})
}




  return (
    <div className="quiz">
       <h3 className="question">{props.question} </h3>
      <div>
        {renderAnswers}
      </div>
    </div> 
  )
  
  
  /* return (
    <div className="quiz">
      <h3 className="question">test question?</h3>
      <div className="buttons">
        <button className="answer-button">Option</button>
        <button className="answer-button">Option</button>
        <button className="answer-button">Option</button>
        <button className="answer-button">Option</button>
        <hr></hr>
    </div>
    </div> 
  )*/
}

