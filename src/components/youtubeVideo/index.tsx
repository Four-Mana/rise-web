'use client'

import React from 'react';

interface YoutubeVideoProps {
  id: string;
  title: string
}

export const YoutubeVideo = ({ id, title }: YoutubeVideoProps) => {

  return (
    <div className='relative max-w-screen-lg md:h-[400px]'>
      <iframe
        src={"https://www.youtube.com/embed/" + id + "?rel=0&cc_load_policy=1"}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder={0}
        className='w-full h-full'
      />
    </div>
  );
};
