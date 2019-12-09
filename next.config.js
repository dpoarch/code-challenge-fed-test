const withCSS = require("@zeit/next-css")
const withSass = require('@zeit/next-sass')

const { resolve } = require("path")

module.exports = withSass(withCSS(
  {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 100000
            }
        }
    });
      config.resolve.alias.components = resolve(__dirname, "./src/components")
      return config
    },
  }
))

