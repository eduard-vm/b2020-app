module.exports = {
  // lintOnSave: false,
  productionSourceMap: false,
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: true,
    },
    // runtimeAnalyzerPlugin: {
    //   open: true,
    // },
  },

  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    // port: 8085, // CHANGE YOUR PORT HERE!
    // https: true,
    // hotOnly: false,
  },
  pwa: {
    name: 'Тестовая штука',
  },
};
