import React, { useEffect } from 'react'
import he from 'he' //"html entities" for decoding text
import uuid from "react-uuid"

//each Card represents just a single question and its answers, not the whole quiz
export default function Card(props) {
  // console.log(props.showAnswers)
  const [selectedAnswer, setSelectedAnswer] = React.useState([]);
  const [allAnswers, setAllAnswers] = React.useState([
    ...props.incorrectAnswers.map(answer => ({
      answer: he.decode(answer),
      isCorrect: false,
      id: uuid(),
    })),
    {
      answer: he.decode(props.correctAnswer),
      isCorrect: true,
      id: uuid(),
      answeredCorrectly: false
    },
  ].sort(() => Math.random() - 0.5)) // this allows the sort to run just once. But then setAllAnswers is never used. Okay?

  React.useEffect(() => {
    markCorrect(selectedAnswer);
  }, [selectedAnswer]);
 
//else if checks if there is a selected Answer, and if this answer equals the answer that is coming in from the list argument, and if that answer is not correct.
  function gradeQuiz(answer, state) {
    if (state===true) {
      if (answer.isCorrect===true) {
        return "correct";
      } else if (selectedAnswer && selectedAnswer.answer === answer.answer && answer.isCorrect === false) {
        return "incorrect"
      } else {
        return "unselected"
      }
    } else {
      return "";
    }
  }
//this is starting to log out now. where you left off. Check console log.
  function markCorrect (answer) {
    console.log(selectedAnswer.answer) 
    if (selectedAnswer.answer === answer.answer && answer.isCorrect === true) {
      props.gotCorrect(true); // call the callback function in Quiz with the gotCorrect value
      
    }
  }

  const handleAnswerClick = function (index) {
    const answer = allAnswers[index]; //returns whole object
    setSelectedAnswer(answer)
  };

  const renderAnswers = function() {
    return allAnswers.map((answer, index) => (
      <li
        key={answer.id}
        className={
          `answer-button 
          ${selectedAnswer.answer === answer.answer
            ? "clicked"
            : ""
          }
          ${gradeQuiz(answer, props.showAnswers)}`
        }
        onClick={() => handleAnswerClick(index) }
      >
        {answer.answer}
      </li>
    ))
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

 