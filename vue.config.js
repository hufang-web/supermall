module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:8000/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}
