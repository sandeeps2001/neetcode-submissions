/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node)return null 
        let map = new Map()

        let dfs = (curr)=>{
        if(map.has(curr))return map.get(curr)
        let copy  = new Node(curr.val)
        map.set(curr , copy)
        for(let nei of curr.neighbors){
            copy.neighbors.push(dfs(nei))
        }
        return copy
      
    }
    return dfs(node)
}
}
