var Demo=function(){"use strict";function a(e,t,r,n,o,c,i){try{var u=e[c](i),a=u.value}catch(e){return void r(e)}u.done?t(a):Promise.resolve(a).then(n,o)}function t(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function n(o){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?t(Object(c),!0).forEach(function(e){var t,r,n;t=o,n=c[r=e],r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(c)):t(Object(c)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(c,e))})}return o}return{init:function(){function e(){var u;return u=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(t,r){try{setTimeout(function(){var e=n({},{a:1},{},{b:2},{},{c:3},{},{d:4});t(e)},1e3)}catch(e){r(e)}});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e)}),(e=function(){var e=this,i=arguments;return new Promise(function(t,r){var n=u.apply(e,i);function o(e){a(n,t,r,o,c,"next",e)}function c(e){a(n,t,r,o,c,"throw",e)}o(void 0)})}).apply(this,arguments)}console.log([].concat([1,2,3],[4,5,6])),function(){e.apply(this,arguments)}()}}}();