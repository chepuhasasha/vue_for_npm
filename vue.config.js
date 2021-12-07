module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
  },
};
