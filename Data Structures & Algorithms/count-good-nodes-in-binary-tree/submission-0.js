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
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root,root.val)
    }
    dfs(root,max){
     if(!root)return 0
     let count =  root.val>=max ? 1 : 0
     let currmax = Math.max(max ,root.val) 
     
     count += this.dfs(root.left , currmax)
     count += this.dfs(root.right , currmax)
      
    return count 
    }
}
