/* eslint-disable import/no-anonymous-default-export */
import questions from "../dbQuestions"

export default (req: any, res: any) => {

  const selectedId = +req.query.id

  const question = questions.filter(question => question.id ===selectedId)

  if(question.length === 1){
    const selectedQuestion = question[0].embaralharRepostas()

      return res.status(200).json(selectedQuestion.toObject())
  } 

  return res.status(204).send()
}