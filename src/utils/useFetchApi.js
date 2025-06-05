import { useState, useEffect } from "react"

export const useFetchApi = () => {
    const [investedProperties, setInvestedProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://api-proptrack.onrender.com/"
                const res = await fetch(url)
                const data = await res.json()
                setInvestedProperties(data?.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { investedProperties, loading, error }
}