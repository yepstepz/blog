import { withPayload } from '@payloadcms/next/withPayload'
import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.gr-assets.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'webmention.io',
      },
    ],
  },
  transpilePackages: ['next-mdx-remote'],
}

const withMDX = createMDX();

export default withPayload(withMDX(nextConfig));
