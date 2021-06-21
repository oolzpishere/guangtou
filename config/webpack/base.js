const {webpackConfig, merge, rules} = require('@rails/webpacker')

const customConfig = require('./custom')
// https://github.com/rails/webpacker/issues/2956#issuecomment-820381886
const fileIndex = rules.findIndex(r => r.type === 'asset/resource')
if (fileIndex !== -1) {
  rules[fileIndex] = {
    test: [
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/,
      /\.tiff$/,
      /\.ico$/,
      /\.avif$/,
      /\.webp$/,
      /\.eot$/,
      /\.otf$/,
      /\.ttf$/,
      /\.woff$/,
      /\.woff2$/,
      /\.svg$/
    ],
    exclude: [/\.(js|mjs|jsx|ts|tsx)$/],
    use: [
      {
        loader: 'file-loader',
        options: {
          name(file) {
            if (file.includes('app/packs')) {
              return 'media/[path][name]-[hash].[ext]'
            }
            return 'media/[folder]/[name]-[hash:8].[ext]'
          },
          context: 'app/packs'
        },
      },
    ],
  }
}

console.log("webpackConfig: " + webpackConfig)
console.log("merge: " + merge)
console.log("rules: " + JSON.stringify(rules))
// console.log("rules: " + JSON.stringify(rules[fileIndex]) )


module.exports = merge(webpackConfig, customConfig)
