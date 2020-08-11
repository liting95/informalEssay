
/**
 * 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，
 * 并返回他们的数组下标
 * 你可以假设每种输入只会对应一个答案。
 * 但是，数组中同一个元素不能使用两遍
 * 
 */

const twoSum = function(nums, target) {
    let res = [];
    for(let i = 0; i < nums.length - 1; i++) {
        let other = target - nums[i];
        for(let j = 1; j < nums.length - 1; j++) {
            if (nums[j] === other) {
                res.push(i, j);
                break 
            } 
        }
    }
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        // j = i + 1 的目的是减少重复计算和避免两个元素下标相同
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[j] == dif)
                return [i,j];
        }
    }
    return res;
};

const twoSum1 = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        let other = target - nums[i];
        if (nums.lastIndexOf(other) > -1 && nums.lastIndexOf(other) != i) {
            console.log(other, i, nums.lastIndexOf(other));
            return [i, nums.lastIndexOf(other)];  
        }
    }
    return res;
};
const twoSum2 = function(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let other = target - nums[i];
        console.log(map,'--map----', i);
        console.log(other, map.get(other), '======');
        if (map.get(other) != undefined){
            return [map.get(other), i ];
        }
        map.set(nums[i], i);
    }
};
var twoSum3 = function(nums, target) {
    var temp = [];
    for(var i=0;i<nums.length;i++){
        var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }
};
// const nums = [2, 7, 11, 15];
const nums = [3, 2, 4];
// const nums = [2, 7, 2, 11, 2, 15];
const target = 6;
const result = twoSum2(nums, target);
console.log(result);

