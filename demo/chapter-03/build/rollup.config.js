const path = require('path')
const babel = require('rollup-plugin-babel');
const serve = require('rollup-plugin-serve');

const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
const resolveFile = function(filePath) {
    return path.join(__dirname, '..', filePath)
  }
module.exports = {
    input: resolve('src/index.js'),
    output: {
        file: resolve('dist/index.js'),
        format: 'umd',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        serve({
            port: 3001,
            contentBase: [resolveFile('example'), resolveFile('dist')]
          })
      ],
}