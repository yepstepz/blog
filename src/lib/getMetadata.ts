import type { Metadata } from 'next';

export const getMetadata = ({
    title,
    description,
    ...rest
}): Metadata => {
  const fullTitle = `${title} | Блог yepstepz.io`
  return {
    title: fullTitle,
    description,
    openGraph: {
      images: [`/metadata/image?title=${title}`]
    },
    ...rest
  }
}
