/**
 * 问题
请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
*/

/**
 * 思路
最近最少使用数据适合使用线性表保存，由于平均时间复杂度是O(1)，则无法使用数组（每次在头部插入数据，需要全部数据进行搬迁），可以使用双向链表
用双向链表保存数据，在添加数据的时候首先检查链表中是否存在，存在则删除数据，并且将数据添加到链表头
为了快速验证数据是否存在，可以再结合hashMap
 */

class LinkNode {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.before = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity 容量
   */
  constructor(capacity) {
    this.hashMap = new Map();
    this.capacity = capacity;
    this.count = 0;
    this.headerNode = new LinkNode();
    this.tailNode = new LinkNode();
    this.headerNode.next = this.tailNode;
    this.tailNode.prev = this.headerNode;
  }

  get(key) {
    const node = this.hashMap.get(key);
    if (!node) {
      return -1;
    }

    this.moveNodeToHeader(node);
    return node.val;
  }

  put(key, value) {
    const node = this.hashMap.get(key);
    if (!node) {
      const newLinkNode = new LinkNode(key, value);
      this.addToHead(newLinkNode);
      this.hashMap.set(key, newLinkNode);
      this.count++;
      if (this.count > this.capacity) {
        this.removeLRUItem();
      }
    } else {
      node.val = value;
      this.moveNodeToHeader(node);
    }
  }

  moveNodeToHeader(node) {
    // 删除节点
    this.removeNode(node);
    // 插入到表头
    this.addToHead(node);
  }

  removeNode(node) {
    const prevNode = node.prev;
    const lastNode = node.next;

    prevNode.next = lastNode;
    lastNode.prev = prevNode;
  }

  addToHead(node) {
    node.prev = this.headerNode;
    node.next = this.headerNode.next;

    this.headerNode.next.prev = node;
    this.headerNode.next = node;
  }

  removeLRUItem() {
    let tail = this.popTail(); //从链表中删除
    this.removeNode(tail);
    this.hashMap.delete(tail.key); //从哈希表中删除
    this.count--;
  }

  popTail() {
    let tailItem = this.tailNode.prev; //通过dummyTail拿到最后一个节点 然后删除
    return tailItem;
  }

  output() {
    let linkNode = this.headerNode.next;

    let text = "";
    while (linkNode.val) {
      text = `{${linkNode.key}:${linkNode.val}}==>` + text;
      linkNode = linkNode.next;
    }
    console.log(text);
  }
}

const cache = new LRUCache(2);
cache.put(1, 1); // 缓存是 {1=1}
cache.output();
cache.put(2, 2); // 缓存是 {1=1, 2=2}
cache.output();

console.log(cache.get(1)); // 返回 1

cache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
cache.output();

console.log(cache.get(2)); // 返回 -1 (未找到)

cache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
cache.output();

console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4
