import React from 'react'

export const TopHeader = () => {
  return (
    <div className='container mx-auto '>
        <div className='lg:flex justify-between w-100'>
            <p className="flex  lg:h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium  sm:px-6 lg:px-8">
            <strong>Open Hours</strong> : Mon – Fri: 09 am – 05 pm
            </p>
            <p className="flex h-2 lg:h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium  sm:px-6 lg:px-8">
            Get free delivery on orders over $100
            </p>
        </div>
    </div>
  )
}
