import React from "react"
import data from "../data"
import Card from "./quiz-components/Card"
/* import uuid from 'react-uuid' for random number access */


export default function Quiz () {

 /* Holds the quiz object array  
 const [quizData, setQuizData] = React.useState(data.results)
 console.log(quizData)*/

 
/* Gets the API data upon opening app and pushes it to quizData state. When ready to use, uncomment  the import uuid at top 
 React.useEffect(() => {
   fetch('https://opentdb.com/api.php?amount=5')
   .then(res =>res.json())
   .then(data => setQuizData(data.results.map(item => {
     return  {
       id: uuid(),
       question: item.question,
       correctAnswer: item.correct_answer,
       incorrectAnswers: item.incorrect_answers
     }
   })))
 }, [])
 */ 

/* Maps over the data in state and passes question to Card as a prop */
 const cardElements = data.map(item => {
  return <Card 
    question={item.question}
    incorrectAnswers={item.incorrect_answers} 
    correctAnswer={item.correct_answer}
    />
  }) 
  return(
    <div>
    {cardElements}
    </div>
  )
}