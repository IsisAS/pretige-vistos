import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { CommonQuestionInterface } from "./commonQuestionInterface"

export default function getCommonQuestion(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse): void {
  const commonQuestion: CommonQuestionInterface[] = [
    {
      question: "Qual é o processo para solicitar o visto americano?",
      answer:
        "O processo inclui preenchimento do formulário DS-160, pagamento da taxa de solicitação (MRV), agendamento de entrevistas no CASV e na Embaixada/Consulado, e comparecimento às entrevistas com a documenta",
    },
    {
      question:
        "O que é a taxa MRV no processo de solicitação de visto americano?",
      answer:
        "A taxa MRV (Machine Readable Visa) é a taxa de solicitação obrigatória para a maioria dos vistos não-imigrantes dos Estados Unidos, como vistos de turismo, estudo e trabalho. Essa taxa cobre os custos de processamento do pedido de visto e deve ser paga antes de agendar a entrevista no consulado ou Embaixada dos EUA",
    },
    {
      question: "Quanto custa a taxa de solicitação do visto?",
      answer:
        "A taxa varia de acordo com o tipo de visto. Para vistos de turismo e negócios (B1/B2), por exemplo, a taxa é de US$185. (em média R$1.036)",
    },
    {
      question: "Preciso agendar uma entrevista para renovar meu visto?",
      answer:
        "Em alguns casos, é possível renovar até 48 meses após o vencimento sem necessidade de entrevista, dependendo das regras vigentes. Você pode renovar o visto a qualquer momento, inclusive antes de ele expirar.",
    },
  ]
    res.status(200).json(commonQuestion);
}
