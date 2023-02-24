import React from 'react'
import he from 'he' //"html entities" for decoding text
import uuid from "react-uuid"

//each Card represents just a single question and its answers, not the whole quiz
export default function Card(props) {
  console.log(props.showAnswers)
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

  // const renderAnswers = function (index) {
  //   if (props.showAnswers === true) {
  //     allAnswers.map((answer) => {
  //       if(answer.isCorrect === true){
  //         return (
  //           <div>

  //           </div>
  //         )

  //       }
  //     }


  //   }
  // }

  // function gradeQuiz(answer, state) {
  //   if (state===true && answer.isCorrect===true) {
  //     return "correct";
  //   } else if (state===true && answer.isCorrect===false && selectedAnswer.isCorrect !== true) {
  //     return "incorrect"
  //   } else {
  //     return "";
  //   }
  // }

  function gradeQuiz(answer, state) {
    if (state===true) {
      if (answer.isCorrect===true) {
        return "correct";
      } else if (selectedAnswer.isCorrect === false) {
        return "incorrect"
      }
    } else {
      return "";
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

