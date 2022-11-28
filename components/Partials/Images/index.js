import Image from 'next/image'
import React from 'react'

export default function ResponsiveImage(props) {
  const {
    width,
    height,
    layout,
    alt
  } = props
  return (
    <Image
      width={width || "100%"}
      height={height || "100%"}
      alt={alt}
      layout={layout || 'responsive'}
      {...props}
    />
  )
}
