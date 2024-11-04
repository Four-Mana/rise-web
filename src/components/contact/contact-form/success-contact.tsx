import { Highlight } from '@/components/highlight'
import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'

export const SuccesContact = () => {
  return (
    <div className='flex flex-col items-center py-20'>
      <BiCheckCircle size={64} className='text-green-400' />
      <h3 className='tracking-tight font-light text-4xl text-white text-center pb-6 w-2/3'>
        Gracias por ponerte en contacto con <Highlight>RISE</Highlight>.<br />
        te responderemos tan pronto como terminemos de <Highlight>destrozar</Highlight> escenarios
      </h3>
    </div>
  )
}