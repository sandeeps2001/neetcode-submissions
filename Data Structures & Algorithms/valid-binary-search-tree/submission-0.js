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
    dfs(root, low , high){
         if(!root)return true //if node is empty return null 
          if (!(root.val > low && root.val < high))       
            return false;

        let left = this.dfs(root.left , low, root.val) 
        let right = this.dfs(root.right , root.val , high)

        return left && right
        
    }
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
      return this.dfs(root , -Infinity , Infinity )


    }
}
