import { useState, useEffect } from "react";
import { EvidencesInterface } from "../api/evidences/evidenceInterface";

interface UseEvidencesReturn {
  evidences: EvidencesInterface[] | null;
  loading: boolean;
}

export function useEvidences(): UseEvidencesReturn {
  const [evidences, setEvidences] = useState<EvidencesInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const staticEvidences: EvidencesInterface[] = [
      {
        image: "/image/suzana.png",
        evidence: "Guilherme e Prestige Vistos, gostaria de agradecer toda a atenção e profissionalismo que você dedicou a mim e aos meus filhos nesse processo do visto americano. Com você, tudo foi mais tranquilo e organizado. Em breve estarei realizando o sonho da minha filha de conhecer a Disney. Obrigada por tudo!",
        userName: "Suzana Lacerda",
      },
      {
        image: "/image/FabioBraga.png",
        evidence: "Excelente serviço! A equipe da Prestige Vistos foi extremamente profissional e atenciosa em todo o processo de obtenção do meu visto. Fui bem informado sobre cada etapa, e o atendimento personalizado fez toda a diferença. Recomendo fortemente para quem busca um serviço de qualidade e confiança!",
        userName: "Fabio Braga",
      },
      {
        image: "/image/KatiusceCruvinel.jpg",
        evidence: "Com toda a certeza a melhor empresa para nos ajudar com o sonho de conseguir o visto americano, sempre muito atenciosos e rápidos em responder nossas dúvidas. O Guilherme colaborou muito nos treinando e preparando para a entrevista é sem sombra de dúvida me deixou mais calma para o grande dia. Já indiquei com meu irmão e continuarei indicando para todos que me perguntarem, pois sem dúvida alguma vocês são os melhores. Muito obrigado por tudo equipe Prestige vistos",
        userName: "Katiusce Cruvine",
      },
      {
        image: "/image/RaphaelLacerda.jpg",
        evidence: "Com a ajuda da Prestige, eu e meus familiares conseguimos conquistar o visto estadunidense com muita tranquilidade (mesmo no meu caso que é um pouco mais complicado). O assessor foi muito prestativo e diligente com todas as nossas demandas e nos orientou ponto a ponto do começo ao fim do processo",
        userName: "Raphael Lacerda",
      },
      {
        image: "/image/FabioAntonioli.jpg",
        evidence: "Excelente atendimento. O processo foi todo muito tranquilo e extremamente rápido. Sanaram todas as minhas dúvidas e o acompanhamento da equipe junto a embaixada e a mim foi excelente. Recomendo a todos.",
        userName: "Fábio Antonioli",
      },
      {
        image: "/image/VictorKopp.jpeg",
        evidence: "Afirmo com toda certeza que valeu demais contar com o apoio e assessoria da Prestige Vistos, em especial ao Sr. Guilherme. Eu e minha esposa fomos muito bem assessorados desde o início do processo do Visto norte-americano. O Sr. Guilherme nos preparou e nos conduziu à aprovação na entrevista consular da Embaixada Americana. Recomendo a todos a Prestige Vistos!",
        userName: "Victor Kopp"
      },
      {
        image: "/image/ThaízaSoares.jpeg",
        evidence: "Na Prestige, fui assessorada pelo Guilherme, que demonstrou bastante conhecimento e profissionalismo em relação a minha demanda, analisando o meu caso e me ajudando a entender o melhor tipo de visto de acordo com a minha necessidade. Do primeiro contato até hoje, Guilherme e a Prestige sempre me atendem super bem, são rápidos no retorno de mensagens e muito atenciosos com nossas dúvidas e anseios, bastante didáticos também nas explicações. O atendimento é realmente individualizado, onde cada caso é analisado e entendido no detalhe. Sou grata pelo apoio da Prestige e do Guilherme durante todo o processo do meu visto! Voltarei mais vezes com certeza, para alcançar com o apoio deles outros sonhos",
        userName: "Thaíza Soares"
      },
    ];

    setEvidences(staticEvidences);
    setLoading(false);
  }, []);

  return { evidences, loading };
}
