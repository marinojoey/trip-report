const { config } = require('dotenv')
const { resolve } = require('path')

const env = config({ path: resolve(__dirname, '../.env') }).parsed

/** @type {import('next').NextConfig} */
const nextConfig = {
  env,
  basePath: '/src/app',
  assetPrefix: '/src/app/',
}

module.exports = nextConfig
