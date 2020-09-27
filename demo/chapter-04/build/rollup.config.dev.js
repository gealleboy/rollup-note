import path from 'path';
import config from './rollup.config';
import server from 'rollup-plugin-serve';

const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
const PORT =3001;
config.output.sourcemap = true;
config.plugins = [
    ...config.plugins,
    ...[
        server({
            port: PORT,
            contentBase: [resolve('example'), resolve('dist')]
        })
    ]
]

module.exports = config;