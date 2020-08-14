/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 */
// {()}
// 时间：116ms 内存：43.9MB
const isVaild1 = function(s) {
    while (s.includes('{}') || s.includes('()') || s.includes('[]')) {
        s = s.replace('{}', '');
        s = s.replace('()', '');
        s = s.replace('[]', '');
    }
    return s == '';
};
// 时间：100ms 内存：38.4MB
const isVaild2 = function(s) {
    if (s.length % 2 !== 0) return false;
    // 借用一个对象来匹配括号
    let map = { '{': '}', '(': ')', '[': ']' };
    // 存放左括号
    let tlist = [];
    let t = s.split('');
    for(let i = 0; i < t.length; i++) {
        // console.log(i, t[i], '====', tlist);
        // 左括号push进去
        if (t[i] === '{' || t[i] === '(' || t[i] === '[') {
            tlist.push(t[i]);
        } else if (t[i] === '}' || t[i] === ')' || t[i] === ']') {
            // 判断数组为空，说明右括号是第一个，肯定无法闭合，返回false
            if (tlist.length === 0) return false;
            // 通过存放左括号的数组在map中找到对应的右括号来匹配，
            // 匹配到移除，继续循环；匹配不到返回false
            if (map[tlist[tlist.length - 1]] === t[i]) {
                tlist.pop(-1);
            } else {
                return false;
            }
        }
    }
    // 如果数组为空返回true，反之false
    return tlist.length === 0;
};
// && 时间：92ms 内存：38.4MB
// || 时间：96ms 内存：38.2MB
const isVaild = function(s) {
    if (s.length % 2 !== 0) return false;
    // map key是右括号，value是左括号
    // 在下面的判断中可以确保list中存放的都是左括号，
    // 循环到右括号的时候进行判断
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    let temp = s.split('');
    let list = [];
    for(const e of temp) {
        console.log(e, '====', map.has(e));
        if (map.has(e)) {
            if (list.length === 0 || map.get(e) !== list[list.length - 1]) {
                return false;
            }
            list.pop();
            // if (list.length != 0 && map.get(e) === list[list.length-1]) {
            //     list.pop();
            // } else {
            //     return false;
            // }
        } else {
            list.push(e);
        }
    }
    return list.length === 0;
};
console.log(isVaild(')(){({}{})()'));
// console.log(isVaild('{()([]])}'));
