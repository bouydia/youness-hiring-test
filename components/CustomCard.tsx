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
import TextList from './TextList'

import { decrypteData } from '@/lib/hashing'
import { encrypteData } from '@/lib/hashing'
import { addText, getAllTexts } from '@/lib/actions/textStore.action'

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
  
   useEffect(() => {
     loadTexts()
   }, [])

   async function loadTexts() {
      const allTexts = await getAllTexts()
      setTextsList(allTexts)
   } 

  const saveText = async () => {

        
        try {
           await addText(text)
           setText('')
           setStatus(`Text Content ${text} successfully added`)
           loadTexts()
        } catch (error) {
                     setStatus(`Fail to add  ${text} !!!`)

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
            <Label htmlFor="name">{status}</Label>
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
          {textsList.map((item, i) => (
            <TextList key={i} text={item.text} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomCard
