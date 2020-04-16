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
            format: 'iife', // 配置编译模块类型为 iife
            name: 'Demo', // iife模块全局命名 window.Demo
            amd: {
                id: 'lib/demo'
              },
            
        },
        external: ['lib/hello', 'lib/world'],
        plugins: [
            babel({
                exclude: 'node_modules/**',
            })
        ],
    }
]