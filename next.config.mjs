import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});
export default withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
