const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/': { page: '/' },
      '/policy/dsgvo': { page: '/policy/dsgvo' },
    }
  },
  images: {
    unoptimized: true,
    loader: "custom"
  },
}

module.exports = nextConfig
