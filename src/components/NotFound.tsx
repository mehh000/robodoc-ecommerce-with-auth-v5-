'use client'

import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-[600px]">
    <Image src={"/Empty.png"} height={400} width={400} className=" object-contain" alt="loading" />
  </div>
  )
}

export default NotFound