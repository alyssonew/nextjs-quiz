import styles from "../styles/Question.module.css"
import QuestionModel from "../model/question";
import Statement from "./Statement";
import Response from "./Response";
import Timer from "./Timer";

const letters = [
  { value: 'A', color: '#F2C866'},
  { value: 'B', color: '#F266ba'},
  { value: 'C', color: '#85b4f2'},
  { value: 'D', color: '#BCE596'},
]

interface IQuestionProps{
  value: QuestionModel
  timeToAnswer?: number
  responseProvided: (index: number) => void
  timeStop: () => void
}

export default function Question(props: IQuestionProps){
  const question = props.value

  function renderResponses(){
    return question.responses.map((response, i) => {
      return <Response 
        key={`${question.id}${i}`}
        value={response}
        index={i}
        letter={letters[i].value}
        collorBgLetter={letters[i].color}
        responseProvided={props.responseProvided}
      />
    })
  }

  return (
    <div className={styles.question}>
      <Statement  text={question.statement}/>
      <Timer duration={props.timeToAnswer ?? 10} 
      key={question.id}
      timeStop={props.timeStop}/>
      {renderResponses()}
    </div>  
  )
}