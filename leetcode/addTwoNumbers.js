/**
 * 给出两个 非空 的链表用来表示两个非负的整数。
 * 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *  示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

const addTwoNumbers = function(l1, l2) {

}

// console.log(addTwoNumbers(l1, l2));

let node = new ListNode('head');
node.next = 2;
let node1 = new ListNode(2, 3);

console.log(node.val, node1);

// var addTwoNumbers = function(l1, l2) {
//     const result = p = {}
//     while (l1 || l2) {
//         // 求和
//         const sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + (p.val || 0)
//         // 取模
//         const exceed = parseInt(sum / 10)
//         l1 = l1 && l1.next
//         l2 = l2 && l2.next
//         // 取余
//         p.val = sum % 10
//         // 判断是否需要进位（新增链表节点）（试试不带 if 条件跑一遍就明白了）
//         if (l1 || l2 || exceed) {
//             p.next = { val: exceed }
//         }
//         p = p.next
//     }
//     return result
// };
