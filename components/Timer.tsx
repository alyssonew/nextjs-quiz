import styles from "../styles/Timer.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer"

interface ITimerProps{
  key: any
  duration: number
  timeStop: () => void
}

export default function Timer(props: ITimerProps){
  return(
    <div className={styles.timer}>
      <CountdownCircleTimer 
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.timeStop}
        colors={[
          ["#BCE596", 0.33],
          ["#F7B801", 0.33],
          ["#ED827A", 0.33],
        ]}>
          {({remainingTime  }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}