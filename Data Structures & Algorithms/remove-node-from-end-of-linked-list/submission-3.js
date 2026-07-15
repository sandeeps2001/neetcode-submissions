/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let first = head;
        let res2 = head;
        let prev
        let len = 0;
        let len2 = 0;
        while (first) {
            first = first.next;
            len++;
        }
        while (head){
            if (len - len2 === n) {
                  if(len2 ===0){
                   head = head.next ||null
                   res2 = head
                  }
                  else{
                    prev.next = prev.next.next || null
                }


                return res2
            }
            prev = head
            head = head.next
            len2++
        }

    }
}