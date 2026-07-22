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
     * @return {number[][]}
     */
    levelOrder(root) {0
        let res =[] 
        this.dfs(root , 0 ,res)
        return res
    }

    dfs(root , depth,res){
        if(!root)return null
        if(depth === res.length)res.push([])
        res[depth].push(root.val)
        this.dfs(root.left ,depth+1 , res)
        this.dfs(root.right , depth+1 ,res)
    }
}
