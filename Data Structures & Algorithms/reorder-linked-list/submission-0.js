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
     * @return {void}
     */
    reorderList(head) {
        let first = head
        let slow  = head
        let fast = head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        let temp
        let curr = slow.next
        slow.next = null
        let rev = null
      
        while(curr){
          temp = curr.next
          curr.next = rev
          rev = curr
          curr = temp
        }
         
        let second = rev
        let temp1
        let temp2
        while(rev ){
            temp1 = first.next
            temp2 = rev.next
            first.next  =  rev
            rev.next  = temp1
            first = temp1
            rev = temp2
        }
    }
}
