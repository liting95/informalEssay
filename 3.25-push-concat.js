// push 直接在原数组上更改
let arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [ 1, 2, 3, 4, 5 ]

/**
 * push() 和 concat() 的区别
 * - 在数组末尾添加元素用push方法，但是这样会改变原有数组的数据
 * - concat方法是在原有的基础上添加元素并返回连接之后的副本，不会修改原有的数组
 */

// concat 不改变原有数组
let arr1 = [1, 2, 3];
let res = arr1.concat(4, 5);
console.log(arr1); // [ 1, 2, 3 ]
console.log(res); // [ 1, 2, 3, 4, 5 ]

// push 会把数组原原本本输出
// concat 会把数组解析之后再输出
let arra = [1, 2];
let arrb = [1, 2];
arra.push(4, [ 5 ]);
let resb = arrb.concat(4, [ 5 ]);
console.log(arra); // [ 1, 2, 4, [ 5 ] ]
console.log(resb); // [ 1, 2, 4, 5 ]

// 可以
let arrp = [1, 2];
arrp.push.apply(arrp,[4, 5]);
console.log(arrp); // [1, 2, 4, 5]