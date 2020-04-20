const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
    importLoaders: 2,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|gif|jpg|ico|svg)$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
});
