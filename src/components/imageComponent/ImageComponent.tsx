'use client'
import React, { useState } from 'react';
import { BlurhashCanvas } from 'react-blurhash';
import Image from 'next/image';

interface ImageComponentProps {
  hash: string;
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  hash,
  src,
  alt,
  className,
  width = 264,
  height = 264,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <BlurhashCanvas
          hash={hash}
          width={width}
          height={height}
          punch={1}
          className="absolute inset-0"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)} 
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};
