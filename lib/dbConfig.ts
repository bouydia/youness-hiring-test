import { storeName } from '@/constants'
import { openDB } from 'idb'

const dbName = 'HiringDB'

//setup indexedDB databse
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