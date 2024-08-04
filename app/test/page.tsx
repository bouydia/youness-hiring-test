"use client"
import React, { useState, useEffect } from 'react'
import { openDB } from 'idb';
type TextItem = {
  id?: number;
  text: string;
  timestamp: Date;
};
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

    const [textsList, setTextsList] = useState<TextItem[]>([]);
  const [newText, setNewText] = useState('');

  useEffect(() => {
    loadTexts();
  }, []);

  async function loadTexts() {
    const allTexts = await getAllTexts();
    setTextsList(allTexts)
  }

  async function addTextBTN() {
    await addText(newText)
      setNewText('')
    loadTexts()
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={newText}
          onChange={e => setNewText(e.target.value)}
        />
        <button onClick={addTextBTN}>Add Text</button>
      </div>
      <ul>
        {textsList.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page