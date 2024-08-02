// db.ts
import Dexie, { type EntityTable } from 'dexie'

interface TextContent {
  id: number
  text: string
}

// create new Database
const db = new Dexie('ContentDatabase') as Dexie & {
  textContents: EntityTable<
    TextContent,
    'id' // primary key "id" (for the typings only)
  >
}

// Schema declaration:
db.version(1).stores({
  textContents: '++id, text', // primary key "id" (for the runtime!)
})

export type { TextContent }
export { db }
