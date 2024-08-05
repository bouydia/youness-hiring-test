'use client'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'
import TextCard from './TextCard'

import { addText, getAllTexts } from '@/lib/actions/textStore.action'
import { decryptData, encryptData } from '@/lib/hashing'
import { useTexts } from '@/hooks/useTexts '

type CustomContentProp = {
  type: 'writer' | 'publisher'
}
type TextItem = {
  id?: number
  text: string
  timestamp: Date
}

function CustomContent({ type }: CustomContentProp) {
  const [text, setText] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [addError, setAddError] = useState<string>('')
  const { textsList, isLoading, error, loadTexts } = useTexts() // Use the custom hook

  const saveText = async (): Promise<void> => {
    try {
      if (text === '') {
        setStatus('')
        setAddError(`text is a required field`)
      } else {
        await addText(text)
        setText('')
        setStatus(`Text Content added successfully `)
        setAddError('')
        loadTexts() // Reload texts after adding
      }
    } catch (error) {
      setStatus('')
      setAddError(`Failed to add Text Content!`)
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize ">{type}</CardTitle>
        <CardDescription>
          {type === 'writer' &&
            "Create your text content. Click save when you're done."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {type === 'writer' && (
          <div className="space-y-4">
            {status && (
              <Label htmlFor="name" className="text-green-500">
                {status}
              </Label>
            )}
            {addError && (
              <Label htmlFor="name" className="text-red-500">
                {addError}
              </Label>
            )}
            <Textarea
              placeholder="Type your text content."
              value={text}
              onChange={ev => setText(ev.target.value)}
            />
            <Button aria-label="Save changes" onClick={saveText}>
              Save changes
            </Button>
          </div>
        )}

        <div>
          {isLoading ? (
            <p>Loading texts...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div
              className={
                ' h-full w-full rounded-md border p-4  flex gap-12 flex-row justify-center  flex-wrap'
              }
            >
              <div className="h-full w-full rounded-md border p-4 flex gap-12 flex-row justify-center flex-wrap">
                {textsList.map((item: TextItem, i: number) => (
                  <TextCard key={i} text={item.text} uuid={item.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomContent
