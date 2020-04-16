import path from 'path';
import configList from './rollup.config';
import server from 'rollup-plugin-serve';

const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
const PORT =3001;
console.log(configList.length)
configList.map((config, index) => {

    config.output.sourcemap = true;
  
    if( index === 0 ) {
      config.plugins = [
        ...config.plugins,
        ...[
            server({
            port: PORT,
            contentBase: [resolve('example'), resolve('dist')]
          })
        ]
      ]
    }
  
    return config;
  })

module.exports = configList;