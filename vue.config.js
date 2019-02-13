module.exports = {
  devServer: {
    proxy: {
      '/darksky': {
        target: 'https://api.darksky.net/forecast',
        changeOrigin: true,
        pathRewrite: {
          '^/darksky': '',
        },
      },
    },
  },
};
