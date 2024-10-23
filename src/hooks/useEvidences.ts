import { useState, useEffect } from "react"
import { Evidences } from "../api/evidences/evidenceInterface"

interface UseEvidencesReturn {
  evidences: Evidences[] | null
  loading: boolean
}

export function useEvidences(): UseEvidencesReturn {
  const [evidences, setEvidences] = useState<Evidences[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchEvidences = async () => {
      try {
        const response = await fetch("/api/evidences/getEvidences")
        if (!response.ok) {
          throw new Error("Erro ao buscar evidências")
        }
        const data: Evidences[] = await response.json()
        setEvidences(data)
      } catch (error) {
        console.error("Erro ao buscar as evidências:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvidences()
  }, [])

  return { evidences, loading }
}
