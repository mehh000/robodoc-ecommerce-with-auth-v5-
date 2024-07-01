'use client'

import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Image from 'next/image'

const Comment = () => {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Comment submitted:', comment)
    setComment('') // Reset the input field after submitting
  }

  return (
    <> 
    <div className='w-full max-w-xl mx-auto mt-10'>
      <form onSubmit={handleSubmit} className='flex items-center p-4 bg-white  rounded-lg'>
        <div className='flex-shrink-0 mr-4'>
          <Image
            src={session?.user.image || '/user.png'}
            alt={session?.user.name || 'User'}
            width={50}
            height={50}
            className='rounded-full object-cover'
          />
        </div>
        <div className='flex-grow'>
          <input
            type='text'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Write a comment...'
            className='w-full p-2 border border-gray-300 rounded-lg'
          />
        </div>
        <button
          type='submit'
          className='ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300'
        >
          Submit
        </button>
      </form>
  
     
    </div> 
    
    
    </>
  )
}

export default Comment
