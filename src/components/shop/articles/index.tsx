import React from 'react'
import { Article } from './article'
import Image from 'next/image';
import { articlesList } from '../articlesList';

export const Articles = () => {
  return (
    <div className='w-full mx-auto px-4 lg:px-0 py-6 md:py-10'>
      <div className='max-w-4xl mx-auto grid md:grid-cols-3 gap-y-6 justify-center'>
        {articlesList.map(({ front, back, description, ...props }) => (
          <Article
            {...props}
            image={
              <Image
                src={front}
                alt={description}
                draggable={false}
                placeholder='blur'
                style={{
                  objectFit: "cover",
                  width: 264,
                  height: 264
                }}
              />
            }
            {
            ...(back && {
              back: (
                <Image
                  src={back}
                  alt={description}
                  draggable={false}
                  placeholder="blur"
                  style={{
                    objectFit: "cover",
                    width: 264,
                    height: 264
                  }}
                />
              ),
            })
            }
            key={front.src}
          />
        ))}
      </div>
    </div>
  )
}
