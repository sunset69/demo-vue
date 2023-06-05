const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',//设置资源路径为相对路径，防止资源无法加载
  transpileDependencies: true,
  outputDir: '../demo/vue'
})
