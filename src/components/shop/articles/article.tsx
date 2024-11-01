import React, { ReactNode } from 'react'

export type ArticleProp = {
  image: ReactNode;
  description: ReactNode;
  price: string;
  variants: string;
}

export const Article = ({ image, description, price = "50.00$", variants = "XS S M L XL" }: ArticleProp) => {
  return (
    <div className='w-full flex'>
      <div>

        <div className="w-full bg-zinc-900 h-80 md:h-96 flex items-center row-start-4 md:row-start-2 md:col-start-2 pb-36 overflow-hidden relative">
          {/* <Image
            src={bandHigh}
            alt="Image from Rise band"
            layout="fill"
            objectFit="cover"
            objectPosition="100% 50%"
            /> */}
          {image}
        </div>

        <span className='text-secondary tracking-wider font-black'>{price}</span>
        <span className='text-white tracking-wider font-black'>{variants}</span>
      </div>
      {description}
    </div>
  )
}
