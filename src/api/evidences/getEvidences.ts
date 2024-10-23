import { Evidences } from "./evidenceInterface"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default function getEvidences(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
): void {
  const evidences: Evidences = {
    title: "Exemplo de Evidência",
    evidence: "Este é um exemplo de evidência.",
  }
  res.status(200).json(evidences)
}
