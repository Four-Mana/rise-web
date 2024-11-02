import React from 'react';
import { Article } from './article';
import { articlesList } from '../articlesList';
import { ImageComponent } from '@/components/imageComponent'; 

export const Articles = () => {
  return (
    <div className="w-full mx-auto px-4 lg:px-0 py-6 md:py-10">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-y-6 justify-center">
        {articlesList.map(({ front, back, description, blurHash, ...props }) => (
          <Article
            {...props}
            image={
              <ImageComponent
                src={front.src}
                hash={blurHash || "default_blur_hash"}
                alt={description || props.name}
                className="object-cover"
              />
            }
            {...(back && {
              back: (
                <ImageComponent
                  src={back.src}
                  hash={blurHash || "default_blur_hash"}
                  alt={description || props.name}
                  className="object-cover"
                />
              ),
            })}
            key={front.src}
          />
        ))}
      </div>
    </div>
  );
};
