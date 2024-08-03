import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/lib/IndexedDB';
import { decrypteData } from '@/lib/hashing';

const TextList = () => {
  //fetch data from localdb (IndexedDB)
  const textContents = useLiveQuery(() => db.textContents.toArray());
  return (
    <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
      {textContents?.map(item => (
        <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
          
          {//decrypt the text to be readable
            decrypteData(item.text)}
        </p>
        
      ))}
    </div>
  )
}

export default TextList