import { useState, useEffect } from "react";
import { ServiceInterface } from "../api/services/serviceInterface";

interface UseServiceReturns {
  touristVisa: ServiceInterface[] | null;
  electronicsVisa: ServiceInterface[] | null;
  loading: boolean;
  tab: ITab[];
  changeTab: (tabSelected: ITab) => void;
}

interface ITab {
  title: string;
  selected: boolean;
}
export function useServices(): UseServiceReturns {
  const [touristVisa, setTouristVisa] = useState<ServiceInterface[] | null>(null);
  const [electronicsVisa, setElectronicsVisa] = useState<ServiceInterface[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [tab, setTab] = useState<ITab[]>(
    [
      {
        title: "Vistos de turismo",
        selected: true,
      },
      {
        title: "Vistos eletrônicos",
        selected: false
      }
    ]
  );

  useEffect(() => {
    const touristVisa: ServiceInterface[] = [
      { title: "Visto Americano (1°visto ou renovação)", icon: "estadosUnidos", library: "fa" },
      { title: "Visto Canadense", icon: "canada", library: "fa" },
      { title: "Visto Australiano", icon: "autralia", library: "fa" },
      { title: "Visto Mexicano", icon: "mexico", library: "fa" },
      { title: "Passaporte Brasileiro (emissão ou renovação)", icon: "brazil", library: "fa" },
    ];

    const electronicsVisa: ServiceInterface[] = [
      { title: "ESTA Americano", icon: "estadosUnidos", library: "fa" },
      { title: "ETA Canadense", icon: "canada", library: "fa" },
      { title: "E-Visa Australiano", icon: "autralia", library: "fa" },
      { title: "ETA Reino Unido", icon: "reinoUnido", library: "fa" },
      { title: "ETIAS - Autorização eletrônica para Europa", icon: "europa", library: "fa" },
      { title: "K-ETA Coreano", icon: "corea", library: "fa" },
      { title: "NZeTA - Autorização eletrônica para a Nova Zelândia", icon: "newzealand", library: "fa" },
      { title: "E-Visa paquistanês", icon: "paquistao", library: "fa" },
      { title: "E-Visa Brasileiro para estrangeiros", icon: "brazil", library: "fa" },
    ];

    setTouristVisa(touristVisa);
    setElectronicsVisa(electronicsVisa);
    setLoading(false);
  }, []);

  const changeTab = (tabSelected: ITab) => {
    const newTab = tab.map((item) => {
      if (item.title === tabSelected.title) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    });
    setTab(newTab);
  }

  return { touristVisa, electronicsVisa, loading, tab, changeTab };
}
