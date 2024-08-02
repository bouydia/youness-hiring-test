import { encrypteData } from '@/lib/hashing'
import { db } from '@/lib/IndexedDB'


export async function addTextContent(text:string, setStatus:any, setText:any) {
  try {
    // Add the new text to the db!
    const encryptedText = encrypteData(text)
    const id = await db.textContents.add({
      text:encryptedText,
    })
    setStatus(`Text Content ${text} successfully added. Got id ${id}`)
    setText('')
  } catch (error) {
    setStatus(`Failed to add ${text}: ${error}`)
  }
}
