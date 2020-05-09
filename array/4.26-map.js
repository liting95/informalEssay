
// map 返回一个新数组，不改变原数组
let arr = [
    { 'name': 'Lily' , 'age': 10, 'sex': 'female' },
    { 'name': 'Bobo' , 'age': 10, 'sex': 'male' },
    { 'name': 'Jan' , 'age': 20, 'sex': 'female' },
];
let reMap = arr.map((e, i) => {
    return e.sex = 'female';
});

// forEach 修改原数组
arr.forEach((e, i) => {
    e.height = (i + 1) * e.age;
});
console.log(arr);