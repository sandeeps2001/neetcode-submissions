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
    reverse(head,tail){
        let curr = head
        let prev = null
        let stop  = tail.next
        while(curr!=stop){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev       
    }
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let dummy = new ListNode(null);
        let res 
        dummy = res;
        let prev = null;
        let temp = head;
        let curr = head;
        let next = null;
        let i = 1;
        while (curr) {
            if (i == k) {
                if (!res) res = curr;
                next = curr.next || null
                this.reverse(temp, curr);
                if (prev) prev.next = curr;
                prev = temp;
                curr = next;
                temp = next
                i = 1
            }
            else{
                     i++;
            curr = curr.next;
            }
        }
        if(i!=1){
          prev.next = temp
        }
       return res
        }
    }

