/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔
 */

let str = '25525511135';
// str = '2552551010';
// str = '255101010';
// str = '25101010';
var restoreIpAddresses = function(s) {
    let arr = [];

    // 27次
    for (let w = 1; w < 4; w++) {
        for (let x = 1; x < 4; x++) {
            for (let y = 1; y < 4; y++) {
                // for (let z = 1; z < 4; z++) {
                    let s1 = s.substring(0, w) - '0';
                    let s2 = s.substring(w, x + w) - '0';
                    let s3 = s.substring(x + w, y + x + w) - '0';
                    let s4 = s.substring(y + x + w) - '0';
                    if (s1 <= 255 && s2 <= 255 && s3 <= 255 && s4 <= 255) {
                        console.log(w, y);
                        arr.push(s1 + '.' + s2 + '.' + s3 + '.' + s4);
                    }
                // }
            }
        }
    }
    return arr;

};
var restoreIpAddresses1 = function(s) {
    let arr = [];
    // +s 将string -> number
    if (s.length < 4 || s.length > 12 || +s > 255255255255) {
        return [];
    }
    for (let w = 1; w < 4; w++) {
        let s1 = s.substring(w);
        if (s1.length < 3 || s1.length > 9) continue;
        let str1 = s.substring(0, w);
        // 超过255 或 05(不是一位但第一位是0)
        console.log(w, 'wwwww');
        if (+str1 > 255 || str1.startsWith('0') && w > 1) continue;
        for (let x = w + 1; x < w + 4; x++) {
            console.log(x, 'xxxx', w + 3);
            let s2 = s.substring(x);
            if (s2.length < 2 || s2.length > 6) continue;
            let str2 = s.substring(w, x);
            if (+str2 > 255 || str2.startsWith('0') && x > w + 1) continue;
            for (let y = x + 1; y < x + 4; y++) {
                let s3 = s.substring(y);
                if (s3.length < 1 || s3.length > 3) continue;
                let str3 = s.substring(x, y);
                if (+str3 > 255 || str3.startsWith('0') && y > x + 1) continue;
                let str4 = s.substring(y);
                if (str4.length > 3 || +str4 > 255 || (str4.startsWith('0') && str4.length > 1)) continue;
                console.log(str1, str2, str3, str4, '====');
                arr.push(str1 + '.' + str2 + '.' + str3 + '.' + str4);
            }
        }
    }
    return arr;

};
console.log(restoreIpAddresses1(str));