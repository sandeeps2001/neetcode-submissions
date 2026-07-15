// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head)return null
        let m = new Map()
        let f = head
        while(f){
            m.set(f, new Node(f.val))
            f = f.next
        }
        f = head
        while(f){
            m.get(f).next = m.get(f.next) || null
            m.get(f).random = m.get(f.random) || null
            f= f.next
        }
        
       return m.get(head)
    }
}
