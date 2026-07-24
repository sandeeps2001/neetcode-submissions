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
    dfs(preorder , inorder , start , end){
        if(start > end)return null
        let rootval = preorder[this.preindex]
        this.preindex++
        let root = new TreeNode(rootval)
        let mid  = start
        while(inorder[mid] !== rootval)mid++
        root.left = this.dfs(preorder ,inorder , start, mid-1)
        root.right = this.dfs(preorder , inorder , mid+1 , end)
        return root
    }
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        this.preindex = 0
        return this.dfs(preorder ,inorder ,0,inorder.length-1)
    }
}
