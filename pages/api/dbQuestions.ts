import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(306, "You can't have your cake ______ eat it too.", [

    AnswerModel.isWrong('although'),
    AnswerModel.isWrong('while'),
    AnswerModel.isWrong('but'),
    AnswerModel.isRight('and'),

   ]),
   new QuestionModel(307, "______? There is just a little.", [
    AnswerModel.isWrong("There's some ice cream left?"),
    AnswerModel.isWrong("Is there an ice cream left?"),
    AnswerModel.isWrong("Is there left any ice cream?"),
    AnswerModel.isRight("Is there any ice cream left?"),

   ]),
   new QuestionModel(308, "Qual é o coletivo de cães?", [
    AnswerModel.isWrong("Manada"),
    AnswerModel.isWrong("Alcateia"),
    AnswerModel.isWrong("Rebanho"),
    AnswerModel.isRight("Matilha"),

   ]),
   new QuestionModel(309, "Qual é o triângulo que tem todos os lados diferentes?", [
    AnswerModel.isWrong("Equilátero"),
    AnswerModel.isWrong("Isóceles"),
    AnswerModel.isWrong("Trapézio"),
    AnswerModel.isRight("Escaleno"),

   ]),


]

export default questions