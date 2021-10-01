import { embaralhar } from "../functions/array"
import AnswerModel from "./answer"

export default class QuestionModel{
  #id: number
  #statement: string
  #responses: AnswerModel[]
  #rightAnswer: boolean
  //#answered: boolean

  constructor(id: number, statement: string, responses: AnswerModel[], rightAnswer = false ){
    this.#id = id
    this.#statement = statement
    this.#responses = responses
    this.#rightAnswer = rightAnswer
  }

  get id(){
    return this.#id
  }

  get statement(){
    return this.#statement
  }

  get responses(){
    return this.#responses
  }

  get rightAnswer(){
    return this.#rightAnswer
  }

  get answered(){
    for(let answer of this.#responses){
      if(answer.revealed) return true
    }
    return false
  }

  get notAnswered(){
    return !this.answered
  }

  responderCom(indice: number): QuestionModel{
    const isRight = this.#responses[indice]?.isRight

    const responses = this. #responses.map((response, i) => {
      const selectedResponse = indice === i
      const shouldReveal = selectedResponse || response.isRight
      return shouldReveal ? response.show() : response
    })

    return new QuestionModel(this.id, this.statement, responses, isRight)
  }


  embaralharRepostas(): QuestionModel{
    let respostasEmbaralhadas = embaralhar(this.#responses)
    return new QuestionModel(this.#id, this.#statement, respostasEmbaralhadas, this.#rightAnswer)
  }


  static fromObject(obj: QuestionModel): QuestionModel{
    const responses = obj.responses.map(resp => AnswerModel.fromObject(resp))
    return new QuestionModel(obj.id, obj.statement, responses, obj.rightAnswer)
  }

  
  toObject(){
    return {
      id: this.#id,
      statement: this.#statement,
      responses: this.#responses.map(resp => resp.toObject()),
      aswered: this.answered,
      rightAnswer: this.#rightAnswer      
    }
  }
}