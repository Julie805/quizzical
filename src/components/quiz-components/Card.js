import React from 'react'

export default function Card (props) {

  return (
    <div className="quiz">
       <h3 className="question">{props.question} </h3>
      <div>
        <button className="answer-button">{props.answer}</button>
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

