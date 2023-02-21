import React from 'react'
import he from 'he' //"html entities" for decoding text

export default function Card (props) {
  const incorrectAnswersObj = props.incorrectAnswers.map(answer => ({
    answer: he.decode(answer),
    isCorrect: false,
  }))
  console.log(incorrectAnswersObj)

  const correctAnswerObj = {
    answer: he.decode(props.correctAnswer),
    isCorrect: true,
  }

  const allAnswers = [...incorrectAnswersObj, correctAnswerObj]
  const allAnswerValues = allAnswers.map(answer => answer.answer)

  // my concern is that this doesn't hold onto its correct attribute.
  const renderAnswers = function() {
   return allAnswerValues.map(answer => (
      <li className="answer-button">{answer}</li>
    ))
  }

  // console.log(props.trueAnswers)
  return (
    <div>
       <h3 className="question">{he.decode(props.question)} </h3>
      <div>
        <ul className="answer-container">
          {renderAnswers()}
        </ul>
      </div>
    </div> 
  ) 
  
}

  // const [answers, setAnswers] = React.useState({
  //   answer: [],
  //   isCorrect: false
  // })

 

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

