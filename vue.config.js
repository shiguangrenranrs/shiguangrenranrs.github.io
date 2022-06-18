const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack')// 1. 引入webpack
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
      }
    },
    plugins: [
      // 2.配置Plugins
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
      // 与 import $引入 配置一个即可，这里是webpack自动加载，可以在任何js文件中使用
    ]
  }
})
