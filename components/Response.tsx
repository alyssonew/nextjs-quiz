import AnswerModel from "../model/answer";
import styles from "../styles/Response.module.css";

interface IResponseProps {
  value: AnswerModel
  index: number
  letter: string
  collorBgLetter: string
  responseProvided: (index: number) => void
}

export default function Response(props: IResponseProps) {

  const response = props.value;
  const revealedResponse = response.revealed ? styles.revealedResponse : ''

  return (
    <div className={styles.response} onClick={() => props.responseProvided(props.index)}>
      <div className={`${revealedResponse} ${styles.contentResponse}`}>


        <div className={styles.front}>
          <div className={styles.letter}
            style={{ backgroundColor: props.collorBgLetter }}>
            {props.letter}
          </div>
          <div className={styles.value}>
            {response.value}
          </div>
        </div>


        <div className={styles.back}>
          {response.isRight ? (
            <div className={styles.right}>
              <div>The right answer is..</div>
              <div className={styles.value}>{response.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>The selected answer is wrong..</div>
              <div className={styles.value}>{response.value}</div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}