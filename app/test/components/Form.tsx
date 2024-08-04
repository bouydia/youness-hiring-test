'use client'
import React, { useState, useEffect } from 'react'

import { addText, getAllTexts } from '@/lib/actions/textStore.action'
type TextItem = {
  id?: number
  text: string
  timestamp: Date
}
const storeName = 'textStore'



const Form = () => {
  const [textsList, setTextsList] = useState<TextItem[]>([])
  const [newText, setNewText] = useState('')

  useEffect(() => {
    loadTexts()
  }, [])

  async function loadTexts() {
    const allTexts = await getAllTexts()
    setTextsList(allTexts)
  }

  async function addTextBTN() {
    await addText(newText)
    setNewText('')
    loadTexts()
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={newText}
          onChange={e => setNewText(e.target.value)}
        />
        <button onClick={addTextBTN}>Add Text</button>
      </div>
      <ul>
        {textsList.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Form
