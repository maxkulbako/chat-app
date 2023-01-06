const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8001
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@views': path.resolve(__dirname, 'src/views/*')
    }
  }
};
