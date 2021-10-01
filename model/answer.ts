
export default class AnswerModel{

  #value: string
  #isRight: boolean
  #revealed:boolean

  constructor(value: string, isRight: boolean, revealed = false){
    this.#value = value
    this.#isRight = isRight
    this.#revealed = revealed
  }

  static isRight(value: string){
    return new AnswerModel(value, true)
  }

  static isWrong(value: string){
    return new AnswerModel(value, false)
  } 

  get value(){
    return this.#value
  }

  get isRight(){
    return this.#isRight
  }

  get revealed(){
    return this.#revealed
  }

  show(){
    return new AnswerModel(this.#value, this.#isRight, true)
  }
  
  static fromObject(obj: AnswerModel): AnswerModel{
    return new AnswerModel(obj.value, obj.isRight, obj.revealed)
  }

  toObject(){
    return{
      value: this.#value,
      isRight: this.#isRight,
      revealed: this.#revealed
    }
  }
}