import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/question";
import Question from "./Question"
import Button from "./Button"

interface IQuizProps{
  question: QuestionModel
  lastQuestion: boolean
  answeredQuestion: (question: QuestionModel) => void
  nextStep: () => void
}

export default function Quiz(props: IQuizProps){

  function responseProvided(index: number){
    if(props.question.notAnswered){
      props.answeredQuestion(props.question.responderCom(index))
    }

  }

  return(
    <div className={styles.quizz}>
      {
        props.question ? 
        <Question 
        value={props.question} 
        timeToAnswer={6}
        responseProvided={responseProvided}
        timeStop={props.nextStep}/>
        : false
      }     

      <Button onClick={props.nextStep} 
        text={props.lastQuestion ? "Finish" : "Next"}
      />
    </div>
  )

}