// for ... of
// for ... in
// array.forEach(element => {});


// 1. 数组
let arr = ['a', 'b', 'c', 'd'];
// for of 
for (const i of arr) {
    // i 即为数组中每个值
    console.log(i, '==for of==', arr[i]); // a ==for of== undefined
}
// for in
for (const k in arr) {
    // k 即为元素下标 arr[k]即为对应的下标元素
    if (arr.hasOwnProperty(k)) {
        console.log(k, '--for in--', arr[k]); // 0 --for in-- a
    }
}

console.log('************************************');

// 1-1. 数组套对象
let arrObj = [{ 'a': 1 }, { 'b': 2 }, { 'c': '3' }];
// for of 
for (const i of arrObj) {
    // i 即为数组中每个值--对象
    console.log(i, '====', arr[i]); // { 'a': 1 } ==== undefined
}
// for in
for (const k in arrObj) {
    // k 即为元素下标 arrObj[k]即为对应的键值
    if (arrObj.hasOwnProperty(k)) {
        console.log(k, '---', arrObj[k]); // 0 --- { 'a': 1 }
    }
}

console.log('****************对象********************');
// 2. 对象 只支持for in
let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4 };
// for of 
// for (const i of obj) {
//     console.log(i, '===', obj[i]); // a === undefined
// }
// for in
for (const k in obj) {
    // k 即为对象中key obj[k]即为对应的键值
    if (obj.hasOwnProperty(k)) {
        console.log(k, '---', obj[k]); // a --- 1
    }
}

console.log('****************自定义属性********************');
arr = ['m', 't', 'w'];
arr.key = 's';
 
for(const key in arr){
    console.log(key + ': '+ arr[key]);	
}
console.log('-----------分割线-----------');
for(const item of arr){	
    console.log(item);
}

// 总结
/**
 * 数组支持for in，for of，对象只支持for in
 * 数组
 *  for in，循环的是元素下标；for of，循环的是数组中的每个值，遍历数组
 * 对象
 *  for in，循环的是对象的键 key；for of 不能遍历对象
 * 
 * for in 会遍历自定义属性，for of 不会
 * 
 * https://blog.csdn.net/aerchi/article/details/80221274?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1
 */