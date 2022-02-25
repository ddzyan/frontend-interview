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
  constructor(key, value) {
    this.key = key;
    this.value = value;

    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.count = 0;

    this.hashMap = {};
    this.headNode = new LinkNode();
    this.tailNode = new LinkNode();
    this.headNode.next = this.tailNode;
    this.tailNode.prev = this.headNode;
  }

  get(key) {
    const node = this.hashMap[key];
    if (!node) {
      return -f;
    }

    this.moveNodeToHead(node);

    return node.value;
  }

  put(key, value) {
    const node = this.hashMap[key];
    if (!node) {
      const linkNode = new LinkNode(key, value);
      this.hashMap[key] = linkNode;
      this.addNodeToHead(linkNode);
      if (this.count > this.capacity) {
        this.removeLRUNode();
      }
    } else {
      node.value = value;
      this.moveNodeToHead(node);
    }
  }

  moveNodeToHead(node) {
    this.removeNode(node);
    this.addNodeToHead(node);
  }

  removeLRUNode() {
    const node = this.popTailNode();
    this.removeNode(node);
  }

  removeNode(node) {
    const headNode = node.prev;
    const tailNode = node.next;

    headNode.next = tailNode;
    tailNode.prev = headNode;
    this.count--;
  }

  popTailNode() {
    const node = this.tailNode.prev;
    return node;
  }

  addNodeToHead(node) {
    node.prev = this.headNode;
    node.next = this.headNode.next;

    this.headNode.next.prev = node;
    this.headNode.next = node;
  }
}

module.exports = LRUCache;
