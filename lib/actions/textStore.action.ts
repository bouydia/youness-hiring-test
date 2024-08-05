import { storeName } from '@/constants'
import { initDB } from '../dbConfig'

//add text content to the DB
export async function addText(text: string) {
  const db = await initDB()
  const tx = db.transaction(storeName, 'readwrite')
  const store = tx.objectStore(storeName)
  await store.add({ text, timestamp: new Date() })
  await tx.done
}

// get all text content from DB
export async function getAllTexts() {
  const db = await initDB()
  return db.getAll(storeName)
}
