import React from "react"
// import data from "./data"
import Card from "./components/Card"
import uuid from "react-uuid"



export default function Quiz () {
//Holds the quiz object array  
 const [quizData, setQuizData] = React.useState([]) 
 const [showAnswers, setShowAnswers] = React.useState(false)
//Gets the API data upon opening app and pushes it to quizData state. 
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) =>
        setQuizData(
          data.results.map((item) => ({
            ...item,
            key: uuid(),
          }))
        )
      );
  }, []);
  const createCards = quizData.map((item) => (
    <div>
      <Card
        key={item.key}
        question={item.question}
        incorrectAnswers={item.incorrect_answers}
        correctAnswer={item.correct_answer}
        showAnswers={showAnswers}
      />
      <hr></hr>
    </div>
  ))

  function renderAnswers () {
    setShowAnswers(true)
  }

  /* Maps over the data in state and passes question to Card as a prop */
  return (
    <div className="quiz-container">
      <h4>QUIZ TIME! 5 questions (scroll for more):</h4>
      {createCards}
      <button className="quiz-button" onClick={()=>renderAnswers()}>Check answers</button>
    </div>
  );
}
  

