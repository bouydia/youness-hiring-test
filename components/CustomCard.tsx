"use client"
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
import { addTextContent } from '@/actions/addTextContent'

type CustomCardProp= {
    type:"writer" | "publisher"
}

 function  CustomCard ({ type }: CustomCardProp) {
  const [text, setText] = useState('')
  const [status, setStatus] = useState('')
  
  const saveText = async () => {
    await addTextContent(text, setStatus, setText)
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
            <Button aria-label="Save changes" onClick={saveText}>Save changes</Button>
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