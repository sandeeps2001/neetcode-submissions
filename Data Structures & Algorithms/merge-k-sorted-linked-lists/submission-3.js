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
        res2.next = list1 || list2
        
        return dummy2.next
    }

     
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0 )return null
       return this.divide(lists , 0 , lists.length-1)
}
    divide(lists , l , r){
        if(l>r)return null
        if(l==r)return lists[l]
        let mid = Math.floor((l+r)/2)
        let left = this.divide(lists , l , mid )
        let right  = this.divide(lists , mid+1 , r)
        return this.attachLists(left ,right)
    }
}


 
