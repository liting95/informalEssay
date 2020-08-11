/** 链表的实现 */
/**
 * 链表不是存储在连续的存储空间，每个元素由一个存储本身的节点和一个指向下一个元素的指针构成
 * 移动或删除元素，更改相应元素上的指针即可
 * head ———> node(item,next) ———> node(item,next) ———> node(item,next) ———> null
 * 
 * 实现链表数据结构，关键在于保存head元素(头元素)及每个元素的next指针
 */

// 辅助类，描述链表中的节点  两个属性：保存节点的值和保存指向下一个节点的指针
const Node = function (element) {
  this.element = element;
  this.next = null;
};
// 基本骨架
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  // 返回链表中索引所对应的元素
  getElementAt(position) {
    // 判断边界，超出返回null
    if (position < 0 || position > this.length - 1) return null;
    let current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }
    // position为0时，返回的是head元素(head是第一个node)
    // position为1，current 是head元素，经过一次循环，
    // current变成了head元素的下一个node，也就是第二个node
    return current;
  }

  // 向链表中添加节点
  append(element) {
    // 先生成一个node
    let node = new Node(element);
    // 如果当前链表为空，就将head指向node
    if (this.head === null){
      this.head = node; 
    } else {
      // 不为空，需要找到尾部元素再添加
      let current = this.getElementAt(this.length - 1);
      // 将尾部元素的next指向要添加的node，新加的node 的next指针默认为null
      current.next = node;
    }
    // 链表长度加1
    this.length++;
  }

  // 在链表的指定位置插入节点
  insert(position, element) {
    // 判断是否超出边界
    if (position < 0 || position > this.length) return false;
    let node = new Node(element);
    // position：0 即放在原先head位置
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // position不为0，获取这个position位置的前面那一个
      let previous = this.getElementAt(position - 1);
      // previous.next 指向的是之前链表的previous节点后面的一个(假如叫 B 节点)
      // 新增节点node，代表node.next应该指向 B 节点(即previous.next)，这样是连接起后面的链表
      // 连接前面的链表，previous 指向新增的节点node
      node.next = previous.next;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  // 删除链表中指定位置的元素，并返回这个元素的值
  removeAt(position) {
    // 判断边界
    if (position < 0 || position > this.length) return false;
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = this.getElementAt(position - 1);
      current = previous.next;
      previous.next = current.next;
      // 被删除的节点由于再也没有其它部分的引用而被丢弃在内存中，等待垃圾回收器来清除
    }
    this.length--;
    return current.element;
  }

  // 删除链表中对应的元素
  remove(element) {
    let position = this.indexOf(element);
    return this.removeAt(position);
  }

  // 在链表中查找给定元素的索引
  indexOf(element) {
    let current = this.head;
    for(let i = 0; i < this.length - 1; i++) {
      if (current.element === element) return i;
      current = current.next;
    }
    return -1;
  }

  // 判断链表是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 返回链表的长度
  size() {
    return this.length;
  }

  // 返回链表的头元素
  getHead() {
    return this.head;
  }

  // 清空链表
  clear() {
    this.head = null;
    this.length = 0;
  }

  // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
  toString() {
    let current = this.head;
    let s = '';
    while (current) {
      let next = current.next;
      next = next ? next.element : 'null';
      s += `[element: ${current.element}, next: ${next}] `;
      current = current.next;
    }
    return s;
  }
}

let linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(8);
linkedList.append(6);
console.log(linkedList.toString());

linkedList.insert(0, 2);
linkedList.insert(5, 10);
console.log(linkedList.toString());

console.log(linkedList.removeAt(8));
console.log(linkedList.toString());

console.log(linkedList.indexOf(6));

linkedList.remove(6);
console.log(linkedList.toString());

console.log(linkedList.size());
console.log(linkedList.isEmpty());
linkedList.clear();
console.log(linkedList.size());