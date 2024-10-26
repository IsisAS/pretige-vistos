import { useState, useEffect } from "react"
import { EvidencesInterface } from "../api/evidences/evidenceInterface"

interface UseEvidencesReturn {
  evidences: EvidencesInterface[] | null
  loading: boolean
}

export function useEvidences(): UseEvidencesReturn {
  const [evidences, setEvidences] = useState<EvidencesInterface[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchEvidences = async () => {
      try {
        const response = await fetch("/api/evidences/getEvidences")
        if (!response.ok) {
          throw new Error("Erro ao buscar evidências")
        }
        const data: EvidencesInterface[] = await response.json()
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
