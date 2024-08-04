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
import { ScrollArea } from './ui/scroll-area'
import clsx from 'clsx'

type CustomCardProp = {
  type: 'writer' | 'publisher'
}
type TextItem = {
  id?: number
  text: string
  timestamp: Date
}

function CustomCard({ type }: CustomCardProp) {
  const [text, setText] = useState('')
  const [textsList, setTextsList] = useState<TextItem[]>([])
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    loadTexts()
  }, [])

  async function loadTexts() {
    const allTexts = await getAllTexts()
    setTextsList(allTexts)
  }

  const saveText = async () => {
    try {
      if (text === '') {
        setStatus('')
        setError(`text is a required field`)
      } else {
        await addText(text)
        setText('')
        setStatus(`Text Content added successfully `)
        setError('')
        loadTexts()
      }
    } catch (error) {
      setStatus('')
      setError(`Faild to add Text Content  !!!`)
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
            {error && (
              <Label htmlFor="name" className="text-red-500">
                {error}
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
          <div
            className={
              ' h-full w-full rounded-md border p-4  flex gap-12 flex-row justify-center  flex-wrap'
            }
          >
            {textsList.map((item, i) => (
              <TextCard key={i} text={item.text} uuid={item.id} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomCard
