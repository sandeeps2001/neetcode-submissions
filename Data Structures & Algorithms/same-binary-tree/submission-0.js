/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
   dfs(p,q){
    if(!p && !q)return true
        if(!p || !q)return false
        if(p.val!=q.val)return false
    
     let l1 = this.dfs(p.left , q.left)
     let r1 = this.dfs(p.right , q.right)
   

   return l1 && r1
  
   }
   
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q){
        return this.dfs(p,q) 
    
    }
}
