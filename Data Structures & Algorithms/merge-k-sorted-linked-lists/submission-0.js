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
     attachLists(list1 , list2){
        let dummy2  = new ListNode(null)
        let res2 = dummy2
        while(list1 && list2){
            if(list1.val <= list2.val){
                res2.next = list1
                list1 = list1.next
            }
            else{
                res2.next = list2
                list2 = list2.next
            }
            res2 = res2.next
            
        }
        if(list1)res2.next = list1
        if(list2)res2.next = list2
        
        return dummy2.next
    }

     
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0 )return null
        let head = lists[0]
        for(let i  = 1 ; i<lists.length;i++){
            head = this.attachLists(head , lists[i])
        
        }
        return head
    
}
    
}


 
