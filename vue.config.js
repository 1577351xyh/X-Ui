module.exports = {
  //eslint
  lintOnSave: false,
  configureWebpack: config => {
    config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
          },
          {
            loader: require.resolve('./utils/markdown-loader'),
          },
        ],
      },
    );
  },
};