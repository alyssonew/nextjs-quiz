import styles from "../styles/Statistics.module.css";

interface IStatisticsProps{
  value: any
  text: string
  bgColor?: string
  colorFont?: string
}

export default function Statistics(props: IStatisticsProps){
    
  return(
    <div className={styles.statistics}>
      <div className={styles.value} style={{
        backgroundColor: props.bgColor ??'#FDD60F',
        color: props.colorFont ?? '#333'
      }}>
        {props.value}
      </div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}