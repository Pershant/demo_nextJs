/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': "college",
    'MYSQL_USER': "root",
    'MYSQL_PASSWORD': "",
  },
}

module.exports = nextConfig

