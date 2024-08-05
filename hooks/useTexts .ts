import { useState, useEffect } from 'react'
import { getAllTexts } from '@/lib/actions/textStore.action'

export interface TextItem {
  id?: number
  text: string
  timestamp: Date
}

export function useTexts() {
  const [textsList, setTextsList] = useState<TextItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadTexts()
  }, [])

  async function loadTexts() {
    try {
      setIsLoading(true)
      const allTexts = await getAllTexts()
      setTextsList(allTexts)
      setError(null)
    } catch (err) {
      setError('Failed to load texts')
    } finally {
      setIsLoading(false)
    }
  }

  return { textsList, isLoading, error, loadTexts }
}
