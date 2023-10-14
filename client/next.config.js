import { config } from 'dotenv'
import { resolve } from 'path'

const env = config({ path: resolve(__dirname, '../.env') }).parsed

/** @type {import('next').NextConfig} */
const nextConfig = {
  env,
}

export default nextConfig
