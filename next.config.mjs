import createMDX from '@next/mdx';
import { i18n } from './next-i18n.config.mjs';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});
export default withMDX({
  i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
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
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
