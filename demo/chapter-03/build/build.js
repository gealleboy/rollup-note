const rollup = require('rollup');
const config = require('./rollup.config');

async function build() {
    const bundle = await rollup.rollup(config);

    console.log(`[INFO] 开始编译${config.input}`);
    const { code, map } = await bundle.generate(config.output);
    console.log(code)
    console.log(`[SUCCESS] 编译结束 ${config.output.file}`);  

    // or write the bundle to disk
    await bundle.write(config.output);
}

build();