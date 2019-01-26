const fs = require('fs')
const ejs = require('ejs')
const rimraf = require('rimraf')
const webpack = require('webpack')
const Browsersync = require('browser-sync')
const task = require('./task')
const config = require('./config')

// global.HMR = !process.argv.includes('--no-hmr') // Hot Module Replacement (HMR)

// Build the app and launch it in a browser for testing via Browsersync
module.exports = task('run', () => new Promise((resolve) => {
  rimraf.sync('public/dist/*', { nosort: true, dot: false })
  let count = 0
  const bs = Browsersync.create()
  const webpackConfig = require('./webpack.dev')
  const compiler = webpack(webpackConfig)
  // http://webpack.github.io/docs/webpack-dev-middleware.html
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: webpackConfig.stats,
  })

  compiler.plugin('done', (stats) => {
    // Generate index.html page
    let bundle
    stats.compilation.chunks.forEach(({ name, files }) => {
      if (name === 'main') [bundle] = files
    })
    const template = fs.readFileSync('./public/index.ejs', 'utf8')
    const render = ejs.compile(template, { filename: './public/index.ejs' })
    const output = render({
      debug: true, bundle: `/dist/${bundle}`, config,
    })
    fs.writeFileSync('./public/index.html', output, 'utf8')

    // Launch Browsersync after the initial bundling is complete
    // For more information visit https://browsersync.io/docs/options
    count += 1
    if (count === 1) {
      bs.init({
        port: process.env.PORT || 8080,
        ui: { port: Number(process.env.PORT || 8080) + 1 },
        server: {
          baseDir: 'public',
          middleware: [
            webpackDevMiddleware,
            require('webpack-hot-middleware')(compiler),
            require('connect-history-api-fallback')(),
          ],
        },
      }, resolve)
    }
  })
}))
