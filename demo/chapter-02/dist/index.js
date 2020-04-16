(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}((function () { 'use strict';

	const arr1 = [1, 2, 3];
	const arr2 = [4, 5, 6];
	const result = [...arr1, ...arr2];
	console.log(result); // class Objs{
	//     constructor(){
	//         this.name = "a"
	//     }
	//     setName=(name)=>{
	//         this.name = name;
	//     }
	//     getName =()=>{
	//         console.log(this.name)
	//     }
	// }
	// let newObj = new Objs()
	// newObj.setName('b');
	// newObj.getName();

})));
