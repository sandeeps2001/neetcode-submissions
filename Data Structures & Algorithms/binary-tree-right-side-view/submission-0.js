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
    dfs(root ,res,depth){
        if(!root)return null
        res[depth] = root.val
        this.dfs(root.left , res ,depth+1)
        this.dfs(root.right , res , depth+1)
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let res = []
   this.dfs(root , res , 0)
   return res
    }

}
