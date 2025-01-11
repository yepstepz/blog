import type { Metadata } from 'next';

export const getMetadata = ({
    title,
    description,
    ...rest
}): Metadata => {
  const fullTitle = `${title} | Блог yepstepz.io`
  const url = rest.alternates.canonical;
  return {
    title: fullTitle,
    description,
    openGraph: {
      images: [`/metadata/image?title=${title}`],
      url: url,
      type: 'website',
      siteName: 'Блог yepstepz.io',
    },
    metadataBase: new URL(process.env.HOME_URL),
    ...rest
  }
}
