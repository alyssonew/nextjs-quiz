import { useRouter } from 'next/router'
import Statistics from '../components/Statistics';
import Button from '../components/Button';
import styles from "../styles/Resultado.module.css";

export default function Result(){
  const router = useRouter()

    const total = Number(router.query.total);
   const hits = Number(router.query.hits);
  const percent = Math.round((hits / total ) * 100)

  return (
    <div className={styles.result}>
      <h1> Final Result</h1>
      <div style={{
        display: "flex"
      }}>
        <Statistics text="Question" value={total}/>
        <Statistics text="Hits" value={hits} bgColor="#9CD2A4"/>
        <Statistics text="Percent" value={`${percent}%`} bgColor="#DE6A33"/>

      </div>
      <Button href="/" text="Try again" />
   </div>
  )
}