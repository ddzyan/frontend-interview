## 问题

请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。实现 LRUCache 类：
LRUCache(int capacity) 以 正整数 作为容量  capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value)  如果关键字  key 已经存在，则变更其数据值  value ；如果不存在，则向缓存中插入该组  key-value 。如果插入操作导致关键字数量超过  capacity ，则应该 逐出 最久未使用的关键字。函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

## 解题思路
首先先分析满足条件的数据结构：
- “最近最少使用” 表示有顺序，则需要用到线性表，
- 插入和获取的平均时间复杂度为0（1），则需要使用 linkList 和 HashMap

如果使用数组，则需要考虑删除和插入的数据搬迁过程带来对时间复杂度的影响，如果使用双向链表则插入和删除的平均时间复杂度为0（1），使用hashMap可以提高查询的时间

抽象简化满足条件的数据结构

```js

class LinkNode {
  constructor(key,val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashMap = {};

    this.headNode = new LinkNode(-1);
    this.tailNode = new LinkNode(-1);

    this.headNode.next = this.tailNode;
    this.tailNode.prev = this.headNode;
  }

  get() {}

  put() {}

  removeLRUItem() {}

  popTailNode() {}

  // 将指定节点转移到头部
  removeNodeToHead() {}

  // 删除节点
  removeNode(){}
}
```

提前创建 headNode 和 tailNode 可以在使用链表的时候不用考虑边界问题