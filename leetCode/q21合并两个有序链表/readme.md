# 简介
https://leetcode-cn.com/problems/merge-two-sorted-lists/

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

# 分析
可以使用 【拉拉链] 的思路来解决，l1和l2分别为左右两边锯齿，组合的新节点为中间拉锁，拉锁移动的时候将锯齿进行合并，合并规则为从小到大

简要代码如下
```js
const l3 = new ListNode(-1);

let p = l3;

while(l1!==null && l2!==null){
  if(l1.val > l2.val){
    p = l2;

  }else {
    p = l1;
  }
  p = p.next;
}

if(l1!==null){

}

if(l2!==null){
  
}

return l3.next;
```
