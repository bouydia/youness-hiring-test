"use client"
import React from 'react'
import { decrypteData } from '@/lib/hashing';

const TextList = async(text: any) => {
  return (
    <div className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
          
          //decrypt the text to be readable
           { decrypteData(text)}
           
        </p>
        
    </div>
  )
}

export default TextList