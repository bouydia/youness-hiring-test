import { openDB } from 'idb'

const dbName = 'MyAppDatabase'
const storeName = 'textStore'

async function initDB() {
  return openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true })
      }
    },
  })
}


export { initDB }