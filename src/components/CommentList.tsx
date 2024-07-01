
import Image from 'next/image'
import React from 'react'

const CommentList = () => {
  return (
    <div className='mt-6'>
    <div className='flex items-start p-4 bg-white shadow-md rounded-lg mb-4'>
      <div className='flex-shrink-0 mr-4'>
        <Image
          src='/user.png'
          alt='Demo User 1'
          width={50}
          height={50}
          className='rounded-full object-cover'
        />
      </div>
      <div>
        <p className='font-semibold'>Demo User 1</p>
        <p>This is a demo comment from user 1.</p>
      </div>
    </div>
    <div className='flex items-start p-4 bg-white shadow-md rounded-lg mb-4'>
      <div className='flex-shrink-0 mr-4'>
        <Image
          src='/user.png'
          alt='Demo User 2'
          width={50}
          height={50}
          className='rounded-full object-cover'
        />
      </div>
      <div>
        <p className='font-semibold'>Demo User 2</p>
        <p>This is another demo comment from user 2.</p>
      </div>
    </div>
  </div>
  )
}

export default CommentList