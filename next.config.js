/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  basePath: '/tximeneaweb',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  sassOptions: {
    additionalData: `$base-path: '/tximeneaweb';\n`,
  },
}
