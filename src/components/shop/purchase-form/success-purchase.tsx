import { Highlight } from '@/components/highlight'
import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'

export const SuccessPurchase = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <BiCheckCircle size={64} className='text-green-400' />
      <h3 className='tracking-tight font-light text-4xl text-white text-center pb-6 w-2/3'>
        Tomamos nota.<br /> Te contactaremos <Highlight>pronto</Highlight> para tramitar la compra.
      </h3>
    </div>
  )
}