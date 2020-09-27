import demo from './lib/demo'


async function initDemo(){
    let data = await demo();
    console.log(data);
}
initDemo()
