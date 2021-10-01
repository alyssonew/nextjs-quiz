import { embaralhar } from "../../../functions/array"
import questions from "../dbQuestions"

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {

  const ids = questions.map(question => question.id)

  return res.status(200).json(embaralhar(ids))
}