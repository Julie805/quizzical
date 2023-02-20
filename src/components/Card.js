import React from 'react'

export default function Card (props) {

  const [answers, setAnswers] = React.useState({
    answer: [],
    isCorrect: false
  })

 

  /*attempt number three */
  
  const falseAnswers = [props.incorrectAnswers]
  const trueAnswers = [props.trueAnswers]
  const renderAnswers = function() {
    falseAnswers.forEach(function(falseAnswer){
      return  (
        <li className="answer-button">{falseAnswer}</li>
      )
    })
    

  }
 
  return (
    <div className="quiz">
       <h3 className="question">{props.question} </h3>
      <div>
        <ul>
          {renderAnswers}
        </ul>
      </div>
    </div> 
  ) 
  
}

 

  /*attempt number two
  
  function renderAnswers () {
    const randomNumber = Math.floor(Math.random() * 4)
    const AnswersArray = props.incorrectAnswers
    const allAnswersArray = AnswersArray.splice(randomNumber,0, props.correctAnswer)
  }*/
    

 /* attempt number one
 
 function renderAnswers() {
  const randomNumber = Math.floor(Math.random() * 3)
  const allAnswersArray = []
  allAnswersArray.push(props.incorrectAnswers.splice(randomNumber, 0, props.correctAnswer))
  return (
      allAnswersArray.map((answer) => {
      return  (
        <li className="answer-button">{answer}</li>
      )
  )
  
})
} */

