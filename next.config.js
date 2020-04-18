const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
    importLoaders: 2,
  },
});
