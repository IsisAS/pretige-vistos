import { useState, useEffect } from "react"
import { ServiceInterface } from "../api/services/serviceInterface"

interface UseServiceReturns {
  services: ServiceInterface[] | null
  loading: boolean
}

export function useServices(): UseServiceReturns {
  const [services, setServices] = useState<ServiceInterface[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services/getServices")
        if (!response.ok) {
          throw new Error("Erro ao buscar evidências")
        }
        const data: ServiceInterface[] = await response.json()
        setServices(data)
      } catch (error) {
        console.error("Erro ao buscar os serviços:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading }
}
