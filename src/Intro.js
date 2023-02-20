import React from "react"


export default function Intro (props) {


 /* Starts the quiz. Button makes start state true. If start=true, the Quiz component is activated. */
  return (
    <div>
      
        <div className="intro">
          <h1>Quizzical</h1>
          <p>Test your knowlege!</p>
          <button className="start-button" onClick={props.start}>Start quiz</button>
        </div>
      
    </div>
  )}