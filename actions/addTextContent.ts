import { db } from '@/lib/IndexedDB'


export async function addTextContent(text:string, setStatus:any, setText:any) {
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
