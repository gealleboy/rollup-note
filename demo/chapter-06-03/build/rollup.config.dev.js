import path from 'path';
import configList from './rollup.config';
import server from 'rollup-plugin-serve';

const resolve = function(filePath) {
    return path.join(__dirname,'..',filePath)
}
const PORT =3001;
const devSite = `http://127.0.0.1:${PORT}`;
const devPath = path.join('example', 'index.html');
const devUrl = `${devSite}/${devPath}`;

setTimeout(()=>{
  console.log(`[dev]: ${devUrl}`)
}, 1000);

configList.map((config, index) => {

    config.output.sourcemap = true;
  
    if( index === 0 ) {
      config.plugins = [
        ...config.plugins,
        ...[
            server({
            port: PORT,
            contentBase: [resolve('')]
          })
        ]
      ]
    }
  
    return config;
  })

module.exports = configList;