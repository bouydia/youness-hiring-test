import { initDB } from '../dbConfig'

const storeName = 'textStore'

export async function addText(text: string) {
  const db = await initDB()
  const tx = db.transaction(storeName, 'readwrite')
  const store = tx.objectStore(storeName)
  await store.add({ text, timestamp: new Date() })
  await tx.done
}

export async function getAllTexts() {
  const db = await initDB()
  return db.getAll(storeName)
}
