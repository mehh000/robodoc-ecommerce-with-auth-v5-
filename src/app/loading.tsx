'use client'
import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <Image src={'/loading.gif'} height={200} width={200} alt='loading' />
    </div>
  )
}

export default loading