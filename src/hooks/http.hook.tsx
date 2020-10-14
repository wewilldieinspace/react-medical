import { useCallback, useEffect, useState } from 'react'


export const useHttp = () => {
    const [loading, setLoading] = useState<boolean | null>(null)
    const [error, setError] = useState(null)

    const request = useCallback( async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'Application/json'
            }

            const response = await fetch(url, { method, headers, body })
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message) || 'Something went wring:((('
            }

            setLoading(false)

            return data

        } catch (e) {
            setLoading(false)
            setError(e.message)
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return { loading, error, clearError, request }
}