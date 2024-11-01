import React from 'react'
import { Article } from './article'

export const Articles = () => {
  return (
    <section>
      <div className='max-w-5xl mx-auto px-4 md:px-0'>
        <Article image={<div className='w-96 h-96 bg-black'></div>} description={<p>test</p>} price={''} variants={''} />
      </div>
    </section>
  )
}
