/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
 * You should preserve the original relative order of the nodes in each of the two partitions.
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let A = new ListNode();
  let B = new ListNode();

  let AL = A,
    BL = B;

  while (head) {
    if (head.val < x) {
      AL = AL.next = head;
    } else {
      BL = BL.next = head;
    }

    head = head.next;
  }
  BL.next = null;
  AL.next = B.next;

  return A.next;
};

function buildLinkedList(arr) {
  const head = new ListNode(-1);
  arr.reduce((acc, val) => (acc.next = new ListNode(val)), head);
  return head.next;
}

const list = buildLinkedList([1, 4, 3, 2, 5, 2]);

console.log(partition(list, 3));
