import { EvidencesInterface } from "./evidenceInterface"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default function getEvidences(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
): void {
  const evidences: EvidencesInterface[] = [
    {
      image: "/image/suzana.png",
      evidence: "Guilherme e Prestige Vistos, gostaria de agradecer toda a atenção e profissionalismo que você dedicou a mim e aos meus filhos nesse processo do visto americano. Com você, tudo foi mais tranquilo e organizado. Em breve estarei realizando o sonho da minha filha de conhecer a Disney. Obrigada por tudo!",
      userName: "Suzana Lacerda"
    },
    {
      image: "/image/FabioBraga.png",
      evidence: "Excelente serviço! A equipe da Prestige Vistos foi extremamente profissional e atenciosa em todo o processo de obtenção do meu visto. Fui bem informado sobre cada etapa, e o atendimento personalizado fez toda a diferença. Recomendo fortemente para quem busca um serviço de qualidade e confiança!",
      userName: "Fabio Braga"
    },
    {
      image: "/image/KatiusceCruvinel.jpg",
      evidence: "Com toda a certeza a melhor empresa para nos ajudar com o sonho de conseguir o visto americano, sempre muito atenciosos e rápidos em responder nossas dúvidas. O Guilherme colaborou muito nos treinando e preparando para a entrevista é sem sombra de dúvida me deixou mais calma para o grande dia. Já indiquei com meu irmão e continuarei indicando para todos que me perguntarem, pois sem dúvida alguma vocês são os melhores. Muito obrigado por tudo equipe Prestige vistos",
      userName: "Katiusce Cruvine"
    },
    {
      image: "/image/RaphaelLacerda.jpg",
      evidence: "Com a ajuda da Prestige, eu e meus familiares conseguimos conquistar o visto estadunidense com muita tranquilidade (mesmo no meu caso que é um pouco mais complicado). O assessor foi muito prestativo e diligente com todas as nossas demandas e nos orientou ponto a ponto do começo ao fim do processo",
      userName: "Raphael Lacerda"
    },
    {
      image: "/image/FabioAntonioli.jpg",
      evidence: "Excelente atendimento. O processo foi todo muito tranquilo e extremamente rápido. Sanaram todas as minhas dúvidas e o acompanhamento da equipe junto a embaixada e a mim foi excelente. Recomendo a todos.",
      userName: "Fábio Antonioli"
    },
  ]
  res.status(200).json(evidences)
}
