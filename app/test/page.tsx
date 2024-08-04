import React from 'react'
import { openDB } from 'idb';

const dbName = 'MyAppDatabase';
const storeName = 'textStore';

async function initDB() {
  return openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
}


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
const page = () => {
    
  return (
    <div>
        
        
        
    </div>
  )
}

export default page