// for (var i = 0; i < 5; i++) {
//     (function (e) {
//         setTimeout(function () {
//             console.log('e-----', e);
//         }, 1000);
//     })(i);
// }
console.log('******************************');

for (var i = 0; i < 5; i++) {
    // setTimeout(function () {
    //     console.log(i);
    // }, 1000);
    (function (q) {
        var x = s1(q);
        console.log(i, 'x=====', x);
    })(i);
    // var x = s1(i);
    // console.log(i, 'x=====', x);
}

function s1(i) {
    (function (o) {
        setTimeout(function () {
            console.log(o + 1);
            return o + 1;
        }, 1000);
    })(i);
    // setTimeout(function () {
    //     console.log(i+1);
    //     return i+1;
    // }, 1000);
}

// 递归函数就是在函数体内调用本函数。使用递归函数一定要注意，处理不当会进入死循环
function f(num) {
    if (num < 1) {
        return 1;
    } else {
        return f(num - 1) * num;
    }
}
