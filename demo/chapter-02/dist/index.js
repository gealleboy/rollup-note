(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    function demo() {
      return new Promise((resolve, reject) => {
        try {
          setTimeout(() => {
            const obj1 = {
              a: 1
            };
            const obj2 = {
              b: 2
            };
            resolve({ ...obj1,
              ...obj2
            });
          }, 1000);
        } catch (error) {
          reject(error);
        }
      });
    }

    async function initDemo() {
      let data = await demo();
      console(data);
    }

    initDemo();

})));
