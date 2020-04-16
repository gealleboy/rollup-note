import { uglify}  from 'rollup-plugin-uglify';
import configList from './rollup.config';

configList.map((config, index) => {
    console.log(config,222)
    config.output.sourcemap = false;
    config.plugins = [
      ...config.plugins,
      ...[
        uglify()
      ]
    ]
  
    return config;
  })

module.exports = configList;