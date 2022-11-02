const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://gettonote.com',
  },
  transpileDependencies: true,

})
