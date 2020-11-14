const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  images: {
    loader: 'imgix',
    path: '',
  },
  optimizeFonts: true,
  optimizeImages: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/services': { page: '/services' },
      '/contact': { page: '/contact' },
      '/about': { page: '/about' }
    }
  }
}
