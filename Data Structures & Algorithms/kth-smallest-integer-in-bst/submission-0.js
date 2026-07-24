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
     counter = 0 ;
      res ;
dfs(root,k){
    if(!root)return 
   this.dfs(root.left , k )
       this.counter++
     if(this.counter === k)this.res = root.val
   this.dfs(root.right , k )

}
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) { 
        this.counter = 0
       this.dfs(root,k)
       return this.res  
    }
}
