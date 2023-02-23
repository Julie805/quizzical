import React from 'react'
import he from 'he' //"html entities" for decoding text
import uuid from "react-uuid"


export default function Card(props) {
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);
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

  const handleAnswerClick = function(index) {
    const answer = allAnswers[index] //clicked answer obj
    const updatedSelectedAnswers = [ 
      ...selectedAnswers,
      {index, isCorrect: answer.isCorrect}  //relevant info
    ]
    setSelectedAnswers([updatedSelectedAnswers])
  }

  console.log(selectedAnswers)


  const renderAnswers = function() {
    return allAnswers.map((answer, index) => (
      <li
        key={answer.id}
        className={`answer-button ${
          selectedAnswers.some((selected) => selected.index === index)
            ? "clicked"
            : ""
        }`}
        onClick={() => handleAnswerClick(index)}
      >
        {answer.answer}
      </li>
    ));
  };


  
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

