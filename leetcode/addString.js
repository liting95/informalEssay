// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和
/**
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式
 */

/**
 * 具体实现也不复杂，我们定义两个指针 ii 和 jj 分别指向 num1 和 num2 的末尾，即最低位，
 * 同时定义一个变量 add 维护当前是否有进位，然后从末尾到开头逐位相加即可。
 * 你可能会想两个数字位数不同怎么处理，这里我们统一在指针当前下标处于负数的时候返回 00，
 * 等价于对位数较短的数字进行了补零操作，这样就可以除去两个数字位数不同情况的处理，
 * 具体可以看下面的代码
 */
// 有问题，一些情况不满足，如 9 99，
let add = function (str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    let differ = arr1.length - arr2.length;
    if (differ > 0) {
        for(let i = 0; i < differ; i++) {
            arr2.unshift(0);
        } 
    } else {
        for(let i = 0; i < Math.abs(differ); i++) {
            arr1.unshift(0);
        }
    }
    let add = 0, sum = [];
    for(let i = arr1.length - 1; i >= 0; i--) {
        let value = (arr1[i] - '0') + (arr2[i] - '0') + add;
        add = Math.floor(value / 10);
        console.log(add, '=====', value % 10, arr1.length);
        sum.push(value % 10);
        if (i >= 0 || add != 0) {
            sum.push(add);
        }
    }
    return sum.reverse().join('');
}
// console.log(add('5678324', '23567'));
// console.log(add('9', '11'));

/** charAt(index) 方法可返回指定位置的字符, 超出字符串的长度范围会返回空字符串 */
let str = 'hello world';
console.log(str.charAt(0)); // h
console.log(str.charAt(3)); // l
console.log(str.charAt(6)); // w

let add2 = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0, arr = [];
    while(i >= 0 || j >= 0 || add !== 0) {
        let n1 = i >= 0 ? num1.charAt(i) - '0' : 0;
        let n2 = j >= 0 ? num2.charAt(j) - '0' : 0;
        let val = n1 + n2 + add;
        arr.push(val % 10);
        add = Math.floor(val / 10);
        i -= 1;
        j -= 1;
    }
    return arr.reverse().join('');
}
console.log(add2('99', '9'));

// 官方的
var addStrings = function(num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0;
    const ans = [];
    while (i >= 0 || j >= 0 || add != 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const result = x + y + add;
        ans.push(result % 10);
        add = Math.floor(result / 10);
        i -= 1;
        j -= 1;
    }
    return ans.reverse().join('');
};




