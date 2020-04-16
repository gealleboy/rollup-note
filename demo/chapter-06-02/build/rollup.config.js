import path from 'path'
import babel from 'rollup-plugin-babel';

const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
export default [
    {
        input: resolve('src/index.js'),
        output: {
            file: resolve('dist/index.js'),
            format: 'amd',
            
        },
        external: ['lib/hello', 'lib/world'],
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    },{
        input: resolve('src/lib/hello.js'),
        output: {
            file: resolve('dist/lib/hello.js'),
            format: 'amd',
            amd: {
                id: 'lib/hello'
              },
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
            format: 'amd',
            amd: {
                id: 'lib/world'
              },
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    }
]