import { navigate } from "gatsby";
import { useEffect } from "react";

export default function IndexPage(): void {
  return useEffect(() => {
    navigate("home")
  }, [])

}