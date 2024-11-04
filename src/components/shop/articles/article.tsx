import classNames from 'classnames';
import React, { ReactNode } from 'react'


export type ArticleProp = {
  image: ReactNode;
  back?: ReactNode;
  name: string;
  price: string;
  variants?: string;
}

export const Article = ({ image, back, name, price, variants }: ArticleProp) => {

  const imageStyle = classNames("max-w-64 max-h-64", {
    "group-hover:hidden": !!back
  })

  return (
    <a href="#purchase-form">
      <div className='w-full flex'>
        <div className='flex flex-col'>
          <div className=" bg-zinc-900 flex items-center justify-center overflow-hidden relative group">
            <div className={imageStyle}>{image}</div>
            {back && (
              <div className="max-w-64 max-h-64 hidden group-hover:flex">
                {back}
              </div>
            )}
          </div>
          <div className='flex flex-col gap-2 pt-2 '>
            <span className='text-white text-xl tracking-wider font-black'>{name}</span>
            <div className='flex flex-row justify-between font-light'>
              <span className='text-white tracking-wider '>{variants}</span>
              <span className='text-white tracking-wider font-black'>{price}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}
