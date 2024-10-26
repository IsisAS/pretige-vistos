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
    const fetchCommonQuestion = async () => {
      try {
        const response = await fetch("/api/commonQuestion/getCommonQuestion")
        if (!response.ok) {
          throw new Error("Erro ao buscar as perguntas frequentes")
        }
        const data: CommonQuestionInterface[] = await response.json()
        setCommonQuestions(data)
      } catch (error) {
        console.error("Erro ao buscar as perguntas frequentes:", error)
      }
    }

    fetchCommonQuestion()
  }, [])

  return { commonQuestions }
}
