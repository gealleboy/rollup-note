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
            format: 'umd',
            
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    },
    {
        input: resolve('src/lib/index.js'),
        output: {
            file: resolve('dist/lib.js'),
            format: 'cjs',
            
        },
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    }
]