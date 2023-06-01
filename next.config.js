/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig


// TESTING: markdown
// const withMDX = require('@next/mdx')({
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [require('rehype-sanitize')(), require('rehype-renderer')()],
//     providerImportSource: '@mdx-js/react',
//   },
// });
