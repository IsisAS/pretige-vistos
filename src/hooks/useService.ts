import { useState, useEffect } from "react";
import { ServiceInterface } from "../api/services/serviceInterface";

interface UseServiceReturns {
  services: ServiceInterface[] | null;
  loading: boolean;
}

export function useServices(): UseServiceReturns {
  const [services, setServices] = useState<ServiceInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const staticServices: ServiceInterface[] = [
      {
        title: "Obtenção do Primeiro Visto Americano",
        description:
          "Especialistas em todo o processo de solicitação de visto americano, cuidamos desde o preenchimento do formulário DS-160 até o treinamento personalizado para a entrevista consular, garantindo que você esteja preparado para cada etapa.",
        icon: "FaPassport",
        library: "fa", // Biblioteca Font Awesome
      },
      {
        title: "Renovação de Visto à Distância",
        description:
          "Facilitamos a renovação do seu visto sem que você precise sair de casa. Oferecemos um serviço rápido e eficiente, cuidando de todo o processo com segurança e precisão, para que você possa focar em seus planos de viagem.",
        icon: "FaSyncAlt",
        library: "fa",
      },
      {
        title: "Emissão de Passaporte",
        description:
          "Precisa de um passaporte para suas próximas viagens? Nossa equipe orienta e acompanha cada etapa do processo de emissão, garantindo que seus documentos estejam corretos e dentro dos prazos.",
        icon: "FaGlobe",
        library: "fa",
      },
      {
        title: "Autorização Eletrônica de Viagem para a Nova Zelândia (NZeTA)",
        description:
          "Se o seu destino é a Nova Zelândia, realizamos todo o processo de solicitação da NZeTA de forma rápida e descomplicada, para que você possa se concentrar no planejamento da sua viagem.",
        icon: "FaPlaneDeparture",
        library: "fa",
      },
      {
        title: "ETA Canadense",
        description:
          "Cuidamos da solicitação da ETA para o Canadá, agilizando o processo para que você tenha tudo pronto antes da sua viagem, sem complicações e com total suporte.",
        icon: "FaCanadianMapleLeaf",
        library: "fa",
      },
      {
        title: "Apostilamento e Tradução Juramentada",
        description:
          "Oferecemos serviços completos de apostilamento e tradução juramentada para qualquer país e idioma, assegurando que seus documentos estejam prontos para uso internacional de acordo com as normas legais.",
        icon: "FaFileSignature",
        library: "fa",
      },
    ];

    setServices(staticServices);
    setLoading(false);
  }, []);

  return { services, loading };
}
