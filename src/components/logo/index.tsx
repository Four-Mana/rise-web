import React from 'react';
import black from './blackAndOrange.png';
import orange from './orange.png';
import orangeHighlight from './orangeWithBorder.png';
import Image from 'next/image';

export type LogoVariant = "black" | "orange" | "orangeHighlight"

const variants = {
  black,
  orange,
  orangeHighlight
}

const sizes = {
  sm: 52,
  md: 64,
  lg: 88
}

export type LogoProps = {
  variant?: LogoVariant;
  size?: "sm" | "md" | "lg"
}

export const Logo = ({ variant = "orangeHighlight", size = "md" }: LogoProps) => {
  return <Image src={variants[variant]} alt="Rise logo" width={sizes[size]} />;
};
