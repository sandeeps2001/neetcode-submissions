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
    dfs(root){
        if(!root)return 0
        let leftgain = Math.max(this.dfs(root.left) , 0)
        let rightgain = Math.max(this.dfs(root.right),0)
        this.best = Math.max(this.best , root.val +leftgain +rightgain)
        return root.val + Math.max(leftgain, rightgain)

    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        this.best = -Infinity
         this.dfs(root)
         return this.best

    }

}
