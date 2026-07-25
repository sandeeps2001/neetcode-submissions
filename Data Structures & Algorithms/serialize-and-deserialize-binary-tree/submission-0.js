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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
     let out = []
     function dfs(root){
        if(!root){
            out.push('N')
            return 
        }
        out.push(root.val)
        dfs(root.left)
        dfs(root.right)
     }
     dfs(root)
     return out.join(',')

    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
      let arr = data.split(',')
      let i = 0
      function build(){
       let val = arr[i++]
       if(val == 'N')return null
       let node = new TreeNode(Number(val))
       node.left = build()
       node.right = build()
       return node
      }
      return build()

    }
}
