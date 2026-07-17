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
        while(lists.length > 1){
            let merge = []
        for(let i  = 0 ; i<lists.length;i += 2){
            let l1 = lists[i]
            let l2 = i+1 < lists.length ? lists[i+1]:null 
            merge.push(this.attachLists(l1 ,l2))
        }
        lists = merge
        }
        return lists[0]
    
}
    
}


 
