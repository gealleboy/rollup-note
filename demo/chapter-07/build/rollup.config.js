const path = require('path');
const buble = require('rollup-plugin-buble');
const babel = require('rollup-plugin-babel');


const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
module.exports = [
    {
        input: resolve('src/index.js'),
        output: {
            file: resolve('dist/index.js'),
            format: 'umd',
            name: 'Demo', 
        },
        external: ['lib/hello', 'lib/world'],
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    },
    {
        input: resolve('src/lib/hello.js'),
        output: {
          file: resolve('dist/lib/hello.js'),
          format: 'umd',
          name: 'Hello',
        }, 
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    },
    {
        input: resolve('src/lib/world.js'),
        output: {
        file: resolve('dist/lib/world.js'),
        format: 'umd',
        name: 'World',
        }, 
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    },
]