import { useState } from "react";

type DropdownReturn = {
  setOpenDropdown: (index: number) => void;
  openDropdown: (index: number) => boolean;
};

export default function useDropdown(): DropdownReturn {
  const [openDropdownStates, setOpenDropdownStates] = useState<{ [key: number]: boolean }>({});

  const setOpenDropdown = (index: number) => {
    setOpenDropdownStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openDropdown = (index: number) => !!openDropdownStates[index];

  return { setOpenDropdown, openDropdown };
}
