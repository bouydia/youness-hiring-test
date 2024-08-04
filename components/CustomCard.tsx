'use client'
import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Button } from './ui/button'
import TextList from './TextList'
import { addTextContent } from '@/lib/actions/TextContent.action'
import { db } from '@/lib/IndexedDB'
import { encrypteData } from '@/lib/hashing'

type CustomCardProp = {
  type: 'writer' | 'publisher'
}

function CustomCard({ type }: CustomCardProp) {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('')

  const saveText = async () => {
    //check if the input is empty
    if (text === '') {
      alert("Text is required'")
    } else {
      try {
        //encrypt the text first
        const encryptedText = encrypteData(text)

        // Add the new text to the db!
        const id = await db.textContents.add({
          text: encryptedText,
        })
        setStatus(`Text Content ${text} successfully added. Got id ${id}`)
        setText('')
      } catch (error) {
        setStatus(`Failed to add ${text}: ${error}`)
      }
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
          <TextList />
        </div>
      </CardContent>
    </Card>
  )
}

export default CustomCard
