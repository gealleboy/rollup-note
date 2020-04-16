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
            format: 'cjs',
            
        },
        external: ['lib/hello', 'lib/world'],
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    }
]