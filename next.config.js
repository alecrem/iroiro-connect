/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/ai-ja',
        destination: '/ai',
        permanent: false
      },
      {
        source: '/travel-ja',
        destination: '/travel',
        permanent: false
      },
      {
        source: '/translation-ja',
        destination: '/translation',
        permanent: false
      },
      {
        source: '/contact-ja',
        destination: '/contact',
        permanent: false
      },
      {
        source: '/ai-en',
        destination: '/en/ai',
        permanent: false
      },
      {
        source: '/relocation-en',
        destination: '/en/relocation',
        permanent: false
      },
      {
        source: '/travel-en',
        destination: '/en/travel',
        permanent: false
      },
      {
        source: '/translation-en',
        destination: '/en/translation',
        permanent: false
      },
      {
        source: '/contact-en',
        destination: '/en/contact',
        permanent: false
      },
      {
        source: '/ai-es',
        destination: '/es/ai',
        permanent: false
      },
      {
        source: '/relocation-es',
        destination: '/es/relocation',
        permanent: false
      },
      {
        source: '/travel-es',
        destination: '/es/travel',
        permanent: false
      },
      {
        source: '/translation-es',
        destination: '/es/translation',
        permanent: false
      },
      {
        source: '/contact-es',
        destination: '/es/contact',
        permanent: false
      }
    ]
  }
})

module.exports = nextConfig
