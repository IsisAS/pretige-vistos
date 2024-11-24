import { useEffect, useState } from "react"
import { CommonQuestionInterface } from "../api/commonQuestion/commonQuestionInterface"

type UseCommonQuestionReturn = {
  commonQuestions: CommonQuestionInterface[]
}

export default function useCommonQuestion(): UseCommonQuestionReturn {
  const [commonQuestions, setCommonQuestions] = useState<
    CommonQuestionInterface[]
  >([])

  useEffect(() => {
    const staticCommonQuestions: CommonQuestionInterface[] = [
      {
        question: "Qual é o processo para solicitar o visto americano?",
        answer:
          "O processo envolve o preenchimento do formulário DS-160, o pagamento da taxa MRV, o agendamento das entrevistas no CASV e na Embaixada/Consulado, além do comparecimento às entrevistas com a documentação necessária.",
      },
      {
        question:
          "O que é a taxa MRV no processo de solicitação de visto americano?",
        answer:
          "A taxa MRV (Machine Readable Visa) é a taxa de solicitação obrigatória para a maioria dos vistos não-imigrantes dos Estados Unidos, como vistos de turismo, estudo e trabalho. Essa taxa cobre os custos de processamento do pedido de visto e deve ser paga antes de agendar a entrevista no consulado ou Embaixada dos EUA.",
      },
      {
        question: "Quanto custa a taxa de solicitação do visto?",
        answer:
          "A taxa varia de acordo com o tipo de visto. Para vistos de turismo e negócios (B1/B2), por exemplo, a taxa é de US$185. (em média R$1.036).",
      },
      {
        question: "Preciso agendar uma entrevista para renovar meu visto?",
        answer:
          "Em alguns casos, é possível renovar o visto até 48 meses após o vencimento sem necessidade de entrevista, conforme as regras vigentes. A renovação pode ser feita a qualquer momento, inclusive antes do visto expirar.",
      },
      {
        question:
          "Posso emitir ou renovar o meu visto americano de qualquer lugar do Brasil?",
        answer:
          "Sim, a Prestige auxilia no processo de emissão e renovação do visto de qualquer lugar do Brasil.",
      },
      {
        question: "A agência consegue adiantar a data da entrevista?",
        answer:
          "Sim, nós monitoramos diariamente as vagas para agendamento. Desta forma, conseguimos as datas mais próximas para nossos clientes.",
      },
    ]

    setCommonQuestions(staticCommonQuestions)
  }, [])

  return { commonQuestions }
}
