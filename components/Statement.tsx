import styles from "../styles/Statement.module.css";

interface IStatementProps {
  text: string
}

export default function Statement(props: IStatementProps){
  return(
    <div className={styles.statement}>
      <span className={styles.text}>
        {props.text}        
      </span>
    </div>
  )
}