import React from 'react'
import he from 'he' //"html entities" for decoding text
import uuid from "react-uuid"

//remember that each card represents just a single question, and not the whole quiz!
export default function Card(props) {
  const [selectedAnswer, setSelectedAnswer] = React.useState([]);
  const allAnswers = [
    ...props.incorrectAnswers.map(answer => ({
      answer: he.decode(answer),
      isCorrect: false,
      id: uuid(),
    })),
    {
      answer: he.decode(props.correctAnswer),
      isCorrect: true,
      id: uuid(),
    },
  ];

  const handleAnswerClick = function (index) {
    const answer = allAnswers[index]; //whole object
    setSelectedAnswer(answer)
  };

  const renderAnswers = function() {
    console.log(selectedAnswer)
    console.log(allAnswers)
    return allAnswers.map((answer, index) => (
      <li
        key={answer.id}
        className={`answer-button ${
          selectedAnswer.answer === answer.answer
            ? "clicked"
            : ""
        }`}
        onClick={() => handleAnswerClick(index)}
      >
        {answer.answer}
      </li>
    ));

  }
  
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

