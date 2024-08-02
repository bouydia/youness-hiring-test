"use client"
import { useState } from "react"
import TextList from "@/components/TextList"
import { db } from "@/lib/IndexedDB"




export function Page() {
 const [text, setText] = useState('')
  const [status, setStatus] = useState('') 

  async function addFriend() {
    try {
      // Add the new text to the db!
      const id = await db.textContents.add({
        text,
      })

      setStatus(`Text Content ${text} successfully added. Got id ${id}`)
      setText('')
    } catch (error) {
      setStatus(`Failed to add ${text}: ${error}`)
    }
  }

  return (
    <>
      <p>{status}</p>
      text:
      <input
        type="text"
        value={text}
        onChange={ev => setText(ev.target.value)}
      />
      <button onClick={addFriend}>Add</button>
      <TextList/>
    </>
  )
}


export default Page