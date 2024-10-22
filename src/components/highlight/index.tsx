import React, { HTMLAttributes } from 'react'

export type HighlightProps = HTMLAttributes<HTMLSpanElement>

export const Highlight = ({ children, className, ...props }: HighlightProps) => {
  return (
    <span {...props} className={`text-primary-400 ${className}`}>{children}</span>
  )
}
