import { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import QuestionModel from '../model/question'
import { useRouter } from 'next/router'

const BASE_URL = 'https://nextjs-quiz-ebon.vercel.app/api'

export default function Home() {

  const router = useRouter()

  const [ids, setIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [hits, setHits] = useState<number>(0)

  async function getQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const ids = await resp.json()
    setIds(ids)
  }

  async function loadQuestion(id: number) {
    const resp = await fetch(`${BASE_URL}/questions/${id}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    getQuestionsIds()

  }, [])

  useEffect(() => {

    ids.length > 0 && loadQuestion(ids[0])

  }, [ids])

  function answeredQuestion(answeredQuestion: QuestionModel) {
    setQuestion(answeredQuestion)
    const isRight = answeredQuestion.rightAnswer
    setHits(hits + (isRight ? 1 : 0))

  }

  function idNextQuestion() {
    if (question) {
      const nextIndex = ids.indexOf(question.id) + 1
      return ids[nextIndex]
    }
  }

  function nextStep() {

    const nextId = idNextQuestion()

    nextId ? nextQuestion(nextId) : finish()

  }

  function nextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: ids.length,
        hits: hits
      }
    })
  }


  return (
    <div style={{
      width: '100%',
      height: '100vh',
    }}>
      {question ? (
        <Quiz

          question={question}
          lastQuestion={idNextQuestion() === undefined}
          answeredQuestion={answeredQuestion}
          nextStep={nextStep}
        />
      ) : false
      }
    </div>

  )
}
