import React from "react"
// import data from "./data"
import Card from "./components/Card"
import uuid from "react-uuid"


export default function Quiz () {

//Holds the quiz object array  
 const [quizData, setQuizData] = React.useState('')
 

 
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
const test = quizData.map((item) => (
  <Card
    question={item.question}
    incorrectAnswers={item.incorrect_answers}
    correctAnswer={item.correct_answer}
    key={item.key}
  />
))
/* Maps over the data in state and passes question to Card as a prop */
return (
  <div>
    {test}
  </div>
);
}
  

