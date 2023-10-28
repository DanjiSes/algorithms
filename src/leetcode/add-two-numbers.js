/**
 *  * Definition for singly-linked list.
 *   * class ListNode {
 *    *     val: number
 *     *     next: ListNode | null
 *      *     constructor(val?: number, next?: ListNode | null) {
 *       *         this.val = (val===undefined ? 0 : val)
 *        *         this.next = (next===undefined ? null : next)
 *         *     }
 *          * }
 *           */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	if (!l1 || !l2) return k
	return new ListNode((li.val + l2.val) % 10, addTwoNumbers(l1.next, l2.next))
};
